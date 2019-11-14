import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any
  pass:any
  
  constructor(public afAuth: AngularFireAuth, public router:Router) {}
  
  login() {
    console.log("Email:"+this.email+"Password: "+this.pass)
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pass).catch(error=>window.alert("Sign In Error"));
    this.afAuth.auth.onAuthStateChanged(user=>{if(user){window.alert("Welcome"); this.router.navigate(["home"])}})
    
    // window.alert("Welcome "+this.email)
    
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
