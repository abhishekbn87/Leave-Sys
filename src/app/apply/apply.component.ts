import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apply} from  '../../app/apply'
import { FormBuilder } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { observable } from 'rxjs';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  from1:any;
  to:any;
  nod:any;
  reason:any;
  caddr:any;
  type1:any;
  url:String;
  email:any

  constructor(private http:HttpClient,public router:Router,af:AngularFireAuth) { 
    af.authState.subscribe(user=> {
      this.email = user.email;
      console.log(this.email);
    })
    
  }

  ngOnInit() {
  }
  success()
  {
    console.log(this.from1);
    console.log(this.to);
    console.log(this.nod);
    console.log(this.reason);
    console.log(this.caddr);
    var address = this.caddr;
    address = address.replace(/\//g,'*');
    console.log(address);

    var string:String = String(this.from1)
    var tokens = string.split(" ")
    var dd1 = tokens[2];
    var mmw1 = tokens[1];
    var yyyy1 = tokens[3];
    var mm1 = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmw1) / 3 + 1
    var date1 = String(yyyy1).concat('-').concat(String(mm1)).concat('-').concat(String(dd1))
    console.log(date1);
    console.log(dd1);
    console.log(mm1);
    console.log(yyyy1);

    var string1:String = String(this.to)
    var tokens1 = string1.split(" ")
    var dd2 = tokens1[2];
    var mmw2 = tokens1[1];
    var yyyy2 = tokens1[3];
    var mm2 = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmw2) / 3 + 1
    var date2 = String(yyyy2).concat('-').concat(String(mm2)).concat('-').concat(String(dd2))
    console.log(date2);
    console.log(dd2);
    console.log(mm2);
    console.log(yyyy2);

    //this.url = "http://localhost:5000/apply_leave/"+"2"+"/"+date1+"/"+date2+"/"+this.nod+"/"+this.reason+"/"+address
    console.log(this.url);
    this.http.get<Boolean>("http://localhost:5000/applied/"+this.email+"/"+this.type1+"/"+date1+"/"+date2+"/"+this.reason+"/"+address).subscribe(response=>{
      console.log(response);
      if(response){
        window.alert("Leave applied succesfully");
      }
      else{
        window.alert("So many leaves not available");
        this.router.navigateByUrl("/apply");
      }
    });

    console.log(this.type1);
    
    this.router.navigateByUrl("/alternate")
  }

}
