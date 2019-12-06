import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import {FormsModule, FormControl} from '@angular/forms';
import {HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component'
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ApplyComponent } from './apply/apply.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import {MatTableModule} from '@angular/material/table';
import {LecturerDetailsComponent} from './lecturer-details/lecturer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HodComponent } from './hod/hod.component';
import { RegisterComponent } from './register/register.component';
import { AlternateComponent } from './alternate/alternate.component';
import { LeavemgtComponent } from './leavemgt/leavemgt.component';
import { LvsubdetailsComponent } from './lvsubdetails/lvsubdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    ApplyComponent,
    LeaveDetailsComponent,
    LecturerDetailsComponent,
    HodComponent,
    RegisterComponent,
    AlternateComponent,
    LeavemgtComponent,
    LvsubdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [AngularFireAuth,AngularFireAuthGuard,MatDatepickerModule,FormControl],
  bootstrap: [AppComponent]
})
export class AppModule { }
