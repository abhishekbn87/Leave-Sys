import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public af:AngularFireAuth,public router:Router) {}
  
  logOut()
  {
    
    this.af.auth.signOut();
    this.af.auth.onAuthStateChanged(user=>{if(!user){window.alert("You have signed out");this.router.navigateByUrl("/login")}});

  }


}