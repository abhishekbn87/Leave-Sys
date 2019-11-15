import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    
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
}
