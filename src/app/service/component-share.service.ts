import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentShareService {
  Source = new BehaviorSubject<any>(0);
   id=this.Source.asObservable();
    

    public ChangeData(number) {
        this.Source.next(number);
    }
    public ResetData(){
      this.Source = new BehaviorSubject<any>(0);
    }
  constructor() { }
}
