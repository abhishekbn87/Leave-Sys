import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { SubD } from '../sub';

@Component({
  selector: 'app-lvsubdetails',
  templateUrl: './lvsubdetails.component.html',
  styleUrls: ['./lvsubdetails.component.css']
})
export class LvsubdetailsComponent implements OnInit {
  email:String;
  sud: SubD[];
  Lid:String;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['From','To','nod_applied','Reason'];
  constructor( private route: ActivatedRoute,private http:HttpClient, private router: Router,af:AngularFireAuth) {
    af.authState.subscribe(user=> this.email=user.email);
    this.Lid = this.route.snapshot.paramMap.get('Lid');
    console.log(this.Lid);
   }

  ngOnInit() {
    
    this.http.get<SubD[]>("http://localhost:5000/lvsubd/"+this.Lid+"/"+this.email).subscribe(data =>{
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.paginator = this.paginator;
    });
  }

}
