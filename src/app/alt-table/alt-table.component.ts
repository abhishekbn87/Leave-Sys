import {Component, ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { emailVerified } from '@angular/fire/auth-guard';
import { LoginComponent } from '../login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LeaveD } from 'src/app/leave'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ALT } from '../alt';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-alt-table',
  styleUrls: ['alt-table.component.css'],
  templateUrl: 'alt-table.component.html',
})
export class AltTableComponent {
  leave: ALT[];
  email:String;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['Date','Class','Section','Time','Subject','Handled_By'];
  constructor( private route: ActivatedRoute,private http:HttpClient, private router: Router,af:AngularFireAuth) {
    af.authState.subscribe(user=>this.email = user.email)
   }

  ngOnInit() {
    this.http.get<ALT[]>("http://localhost:5000/alt/"+this.email).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  
  


  
}