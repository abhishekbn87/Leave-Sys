import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.css']
})
export class AlternateComponent implements OnInit {
  alter: Number;
  constructor (private http:HttpClient) {

  }
  alt = [];

  ngOnInit() {
    this.http.get<Number>("http://localhost:5000/alternate").subscribe(data =>{
      this.alter = data;
      for(let i =1;i<=data;i++){
        this.alt.push(i);
      }
    });

  }

}
