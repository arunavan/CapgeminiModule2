import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  invokeupdate=new EventEmitter();
  subsVar:Subscription;
  constructor() { }
  upsend(i:number){
this.invokeupdate.emit(i);

  }
}
