import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name:any;
  Fid:any;
  Desig:any;
  Ph:any;
  email:any;
  doj:any;
  aadh:any;
  pan:any;
  dob:any;
  addr:any;
  sal:any;
  sex:any;
  url:String;
  constructor( public router:Router, private http:HttpClient) { }

  ngOnInit() {
  }

  success(){
    console.log(this.Name);
    console.log(this.Fid);
    console.log(this.Desig);
    console.log(this.Ph);
    console.log(this.email);
    console.log(this.doj);
    console.log(this.aadh)
    console.log(this.pan);
    console.log(this.dob);
    var address = this.addr;
    address = address.replace(/\//g,'*');
    console.log(address);
    console.log(this.sal);
    console.log(this.sex);

    var string:String = String(this.doj)
    var tokens = string.split(" ")
    var dd1 = tokens[2];
    var mmw1 = tokens[1];
    var yyyy1 = tokens[3];
    var mm1 = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmw1) / 3 + 1
    var date1 = String(yyyy1).concat('-').concat(String(mm1)).concat('-').concat(String(dd1))
    console.log(date1);

    var string1:String = String(this.dob)
    var tokens1 = string1.split(" ")
    var dd2 = tokens1[2];
    var mmw2 = tokens1[1];
    var yyyy2 = tokens1[3];
    var mm2 = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmw2) / 3 + 1
    var date2 = String(yyyy2).concat('-').concat(String(mm2)).concat('-').concat(String(dd2))
    console.log(date2);

    this.url = "http://localhost:5000/regs/"+this.Name+"/"+this.Fid+"/"+this.Desig+"/"+this.Ph+"/"+this.email+"/"+date1+"/"+this.aadh+"/"+this.pan+"/"+date2+"/"+address+"/"+this.sal+"/"+this.sex;
    console.log(this.url);

    this.http.get("http://localhost:5000/regs/"+this.Name+"/"+this.Fid+"/"+this.Desig+"/"+this.Ph+"/"+this.email+"/"+date1+"/"+this.aadh+"/"+this.pan+"/"+date2+"/"+address+"/"+this.sal+"/"+this.sex,{observe:'response'}).subscribe(response=>{
      window.alert("Registraion successfull");

      console.log(response.status);
    });
    this.router.navigateByUrl("/home")
  }

}
