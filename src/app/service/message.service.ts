import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Source = new BehaviorSubject<string>("no");
  id=this.Source.asObservable();  
  constructor() { }
  SetMessage(msg){
    this.Source.next(msg);
  }
  
}
