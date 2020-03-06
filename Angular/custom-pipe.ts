ng generate class CustomPipe
===========CustomPipe
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({    name: 'cpipe',    pure: false  })
export class CustomPipe  implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
}
==============app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomPipe} from './custom-pipe'
import { AppComponent } from './app.component';
@NgModule({
  declarations: [    AppComponent,CustomPipe  ],
  imports: [    BrowserModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
==============
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ename = 'Sri Ram';
}
======================
<h1>   {{ename | cpipe :"Mr.":"the great" }} </h1>
