import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
emp:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(Response =>
    this.emp = Response  );


  }

}
