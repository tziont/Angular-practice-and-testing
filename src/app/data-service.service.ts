import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private messagesourse = new BehaviorSubject<string>("default message");
currentMessage = this.messagesourse.asObservable();
  constructor() { }

  changeMessage(message) {
    this.messagesourse.next(message);
  }
}
