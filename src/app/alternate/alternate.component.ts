import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Handle } from './handle';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.css']
})
export class AlternateComponent implements OnInit {
  alter: any;
  hands:Handle[]=[];
  date1:String[]=[];
  class1:String[]=[];
  section:String[]=[];
  time:String[]=[];
  sub:String[]=[];
  handel:Number[]=[];
  alt:Number[] = [];
  email:String;
  constructor (private http:HttpClient, af:AngularFireAuth,private router:Router,private _snackBar: MatSnackBar) {
    af.authState.subscribe(user=>{
      this.email = user.email;
    })

    //Automatic date addition
    this.http.get<String[]>("http://localhost:5000/dateadd/"+this.email).subscribe(data =>{
      this.date1 = data
      console.log(this.date1);
      });


  }

  ngOnInit() {
    this.http.get<Handle[]>("http://localhost:5000/handle").subscribe(data=>{
      this.hands = data;
    });


    this.http.get<Number>("http://localhost:5000/alternate/"+this.email).subscribe(data =>{
      this.alter = data;
      for(let i =1;i<=data;i++){
        this.alt.push(i);
      }
    });

  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  success(){
    this._snackBar.open("Sending Email", "Dismiss", {
      duration: 10000,
    });
    console.log(this.email);
    console.log(this.date1);
    console.log(this.class1);
    console.log(this.section);
    console.log(this.time);
    console.log(this.sub);
    console.log(this.handel);
    console.log(this.alter);

    for(let i=0;i<this.alter;i++){
      console.log(i);
      this.http.get("http://localhost:5000/altinsert/"+this.email+"/"+this.date1[i]+"/"+this.class1[i]+"/"+this.section[i]+"/"+this.time[i]+"/"+this.sub[i]+"/"+this.handel[i],{observe:'response'}).subscribe(response=>{
        console.log(response);
        if(i == this.alter-1) {
          window.alert("Alternate Arrangement Made");
          this.router.navigateByUrl("/home")
        }
        
      })
    }

  }


}
