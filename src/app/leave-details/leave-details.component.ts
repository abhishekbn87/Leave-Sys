import {Component, ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { emailVerified } from '@angular/fire/auth-guard';
import { LoginComponent } from '../login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LeaveD } from 'src/app/leave'
import { MatPaginator, MatTableDataSource } from '@angular/material';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-leave-details',
  styleUrls: ['leave-details.component.css'],
  templateUrl: 'leave-details.component.html',
})
export class LeaveDetailsComponent {
  leave: LeaveD[];
  email:String;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['Slno','Lid','nod_applied','nod_remaining'];
  constructor( private route: ActivatedRoute,private http:HttpClient, private router: Router,af:AngularFireAuth) {
    af.authState.subscribe(user=>this.email = user.email)
   }

  ngOnInit() {
    this.http.get<LeaveD[]>("http://localhost:5000/leaved/"+this.email).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  selected(row) {
    
  }
  
  


  
}