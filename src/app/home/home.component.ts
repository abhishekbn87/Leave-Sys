import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { AngularFireAuth } from '@angular/fire/auth';
//import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hod = false;
  constructor(private af: AngularFireAuth, public router:Router) { }

  ngOnInit() {
    this.af.user.subscribe(data=> {if(data){
      if(data.email == "asha.masthi@gmail.com")
      {
        this.hod = true;
        console.log(this.hod);
      }
    }});
    }
  
  applyLeave()
  {
      this.router.navigateByUrl("/apply")
  }
  lvDetails()
  {
    this.router.navigateByUrl("/lvdtls")
  }
  facDtls(){
    this.router.navigateByUrl("/lcdtls")
  }
  lmgmt(){
    this.router.navigateByUrl("/lmdtls")
  }
  regis(){
    this.router.navigateByUrl("/register")
  }
  alt()
  {
    this.router.navigateByUrl("/alt")
  }
}
