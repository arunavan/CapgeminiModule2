import { Component, OnInit } from '@angular/core';
import login from '../../login/details.json'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mydata = login
  flag = false
  constructor() { }

  ngOnInit() {
  }
  authenticate(form) {
    this.flag = false
    for (let a of this.mydata) {
      if (form.username == a.username && form.password == a.password) {
        this.flag = true
        break
      }
    }
    if (this.flag)
      alert("Authenticated")
    else {
      alert("Please check your Username or Password")

    }
  }
}
