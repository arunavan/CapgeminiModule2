import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowstudentsComponent } from './showstudents/showstudents.component'
import { ShowemployeesComponent } from '././showemployees/showemployees.component'
import { FormComponent } from '././form/form.component'

import { DeleteComponent } from '././delete/delete.component'
import { AddemployeeComponent } from '././addemployee/addemployee.component'
import{HttpsComponent} from './https/https.component'
import{LoginComponent} from './login/login.component'
import{EmpdetailsComponent} from './empdetails/empdetails.component'
import{ProductdetailsComponent} from'./productdetails/productdetails.component'
import{BookdetailsComponent} from'./bookdetails/bookdetails.component'
const routes: Routes =
  [

    {
      path: 'showStudent',
      component: ShowstudentsComponent


    },
    {

      path: 'showEmployee',
      component: ShowemployeesComponent
    },
    {

      path: '',
      component: FormComponent
    },
    
    {
      path: 'delete',
      component: DeleteComponent

    },
    {
      path: 'addEmployee',
      component: AddemployeeComponent

    },

  {
    path:'Http',
    component: HttpsComponent

  },
  {
    path:'login',
    component: LoginComponent

  },
  {
    path:'Sort',
    component: EmpdetailsComponent

  },
  {
    path:'valid',
    component: ProductdetailsComponent

  },
  {
    path:'search',
    component: BookdetailsComponent

  },




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
