import { Component, OnInit } from '@angular/core';

import data from '../../data/employeedata.json'
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employees = data
 
  constructor() { }

  ngOnInit() {
  }
  addEmployee(form) {
    this.employees.push({
      id:form.id,
      name:form.name,
      salary:form.salary,
      city:form.city
    })
  }
}
