import { Component, OnInit } from '@angular/core';
import details from'./details/empdetails.json'
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
employee=details
  constructor() { }

  ngOnInit() {
  }
sortId(){
this.employee.sort((a,b) => (a.empId > b.empId) ? 1:-1)

}
sortName(){
  this.employee.sort((a,b) => (a.empName > b.empName) ? 1:-1)
  
  }
  sortSal(){
    this.employee.sort((a,b) => (a.empSal > b.empSal) ? 1:-1)
    
    }
    sortDept(){
      this.employee.sort((a,b) => (a.empDept> b.empDept) ? 1:-1)
      
      }
      
    
  



}
