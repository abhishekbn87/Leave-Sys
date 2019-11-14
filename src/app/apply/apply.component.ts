import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  success()
  {
    window.alert("Leave applied succesfully");
    this.router.navigateByUrl("/home");
  }

}
