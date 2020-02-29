import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  add(a, b) {
    return a + b
  }
  multiply(a, b) {
    return a * b
  }
  display(){
    alert(name)
  }
displayy(name,id,salary,dept){
  alert(name+"  "+id+"  "+salary+" "+dept);
}
  
  constructor() { }
}
