import { Component, OnInit, ViewChild } from '@angular/core';
import { Faculty } from '../fcd';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {
  faculty:any;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name'];
  
  constructor( private route: ActivatedRoute,private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<Faculty[]>("http://localhost:5000/HOD_Leave").subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
  });
}

}
