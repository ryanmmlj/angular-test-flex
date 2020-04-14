import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<String>(" ");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: String) {
   this.messageSource.next(message);
  }
}
