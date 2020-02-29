import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import data from '../../data/employeedata.json'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employees = data
  constructor(private serv: UpdateService) { }
  show = false
  ngOnInit() {

  }

  delete(i) {
    data.splice(i, 1)

  }

  update(i) {
    this.serv.upsend(i);

  }
  getData(name, id, salary, dept) {
    //alert(this.serv.add(26, 64))
    alert(name + "  " + id + "  " + salary + " " + dept);
  }



}
