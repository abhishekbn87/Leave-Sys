import {Component, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Faculty } from 'src/app/fcd'

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-lecturer-details',
  styleUrls: ['lecturer-details.component.css'],
  templateUrl: 'lecturer-details.component.html',
})
export class LecturerDetailsComponent {

  faculty: Faculty[];
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id','name','email','phone','gender','dob','addr'];
  constructor( private route: ActivatedRoute,private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<Faculty[]>("http://localhost:5000/Faculty").subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
}
