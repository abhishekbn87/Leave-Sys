import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveD } from '../leave';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-leavemgt',
  templateUrl: './leavemgt.component.html',
  styleUrls: ['./leavemgt.component.css']
})
export class LeavemgtComponent implements OnInit {
  Name:String;
  dataSource:any;
  leave: LeaveD[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['Slno','Lid','nod_applied','nod_remaining'];
  constructor(private route: ActivatedRoute,private http:HttpClient, private router: Router,af:AngularFireAuth) {
    this.Name = this.route.snapshot.paramMap.get('Name');
    console.log(this.Name);
   }

  ngOnInit() {
   
    this.http.get<LeaveD[]>("http://localhost:5000/hodmgt/"+this.Name).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
