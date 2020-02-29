import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MultiplyPipe } from './multiply.pipe';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';

import { DeleteComponent } from './delete/delete.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HttpsComponent } from './https/https.component';
import { LoginComponent } from './login/login.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FilterPipe } from './filter.pipe';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    MultiplyPipe,
    ShowstudentsComponent,
    ShowemployeesComponent,
 
    DeleteComponent,
    AddemployeeComponent,
    
    HttpsComponent,
    
    LoginComponent,
    
    EmpdetailsComponent,
    
    ProductdetailsComponent,
    
    FilterPipe,
    
    BookdetailsComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
