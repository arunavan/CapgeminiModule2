import { Component, OnInit } from '@angular/core';
import data from '../../data/employeedata.json'
import { UpdateService } from '../update.service'
@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrls: ['./showemployees.component.css']
})
export class ShowemployeesComponent implements OnInit {
  array = data
  id: any
  name: any
  salary: any
  city: any
  index = null;
  constructor(private service: UpdateService) { }

  ngOnInit() {

    if (this.service.subsVar == undefined) {
      this.service.subsVar = this.service.invokeupdate.subscribe((i: number) => {
        this.view(i);
      });
    }

  }
  view(i: number) {
    this.id = this.array[i].id
    this.name = this.array[i].name
    this.salary = this.array[i].salary
    this.city = this.array[i].city
    this.index = i
  }
  setnew(form) {
    this.array.splice(this.index, 1, {
      id: this.id,
      name: this.name,
      salary: this.salary,
      city: this.city
    })

  }

}
