import { Component, OnInit } from '@angular/core';
import data from '../../data/booklist.json'
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  booklist=data
  search:any
  constructor() { }

  ngOnInit() {
  }
setTypeId(value){

this.search={id:value}
}
setTypeTitle(value){

  this.search={title:value}
  }
  setTypeAuthor(value){

    this.search={author:value}
    }
    setTypeYear(value){

      this.search={year:value}
      }
      
    
  
}
