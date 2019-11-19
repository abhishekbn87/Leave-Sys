import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Handle } from './handle';


@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.css']
})
export class AlternateComponent implements OnInit {
  alter: Number;
  hands:Handle[];
  date1:any;
  class:any;
  section:any;
  time:any;
  sub:any;
  handel:any;
  constructor (private http:HttpClient) {

  }

  ngOnInit() {
    this.http.get<Handle[]>("http://localhost;5000/handle").subscribe(data=>{
      this.hands = data;
    });
    /*this.http.get<Number>("http://localhost:5000/alternate").subscribe(data =>{
      this.alter = data;
      for(let i =1;i<=data;i++){
        this.alt.push(i);
      }
    });*/

  }

}
