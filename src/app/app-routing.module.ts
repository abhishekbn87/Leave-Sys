import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ApplyComponent } from './apply/apply.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LecturerDetailsComponent } from './lecturer-details/lecturer-details.component';
import { HodComponent } from './hod/hod.component';
import { RegisterComponent } from './register/register.component';
import { AlternateComponent } from './alternate/alternate.component';
import { LeavemgtComponent } from './leavemgt/leavemgt.component';
import { LvsubdetailsComponent } from './lvsubdetails/lvsubdetails.component';
import { AltTableComponent } from './alt-table/alt-table.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);


const routes: Routes = [{path:"login",component:LoginComponent},
                        {path:"home",component:HomeComponent,canActivate:[AngularFireAuthGuard],   data: {authGuardPipe: redirectUnauthorizedToLogin}},
                        {path:"apply",component:ApplyComponent,canActivate:[AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedTo["login"]}},
                        {path:"lvdtls",component:LeaveDetailsComponent,canActivate:[AngularFireAuthGuard],data:{ authGuardPipe: redirectUnauthorizedTo["login"]}},
                        {path:"lcdtls",component: LecturerDetailsComponent,canActivate:[AngularFireAuthGuard],data: {authGuardPipe:redirectUnauthorizedTo["login"]}},
                        {path:"lmdtls",component: HodComponent,canActivate:[AngularFireAuthGuard],data: {authGuardPipe:redirectUnauthorizedTo["login"]}},
                        {path: '',redirectTo: '/login', pathMatch: 'full'}, 
                        {path: "register",component:RegisterComponent,canActivate:[AngularFireAuthGuard],data: {authGuardPipe:redirectUnauthorizedTo["/login"]} }, 
                        {path: "alternate",component:AlternateComponent,canActivate:[AngularFireAuthGuard],data: {authGuardPipe:redirectUnauthorizedTo["/login"]}},
                        {path: "ldindi/:Name", component:LeavemgtComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedTo["/login"]}},
                        {path: "lvsub/:Lid", component:LvsubdetailsComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedTo["/login"]}},
                        {path: "alt", component:AltTableComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedTo["/login"]}}
                      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
