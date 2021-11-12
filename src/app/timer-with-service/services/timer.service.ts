import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private counterSubject = new Subject<any>();
  private logSubject = new Subject<any>();
  private countSubject = new Subject<any>();
  private btnSubject = new Subject<any>();
  private actionSubject = new Subject<any>();
  private limitSubject = new Subject<any>();

  putData(data: any) {
    this.counterSubject.next(data)
  }
  
  getData() {
    return this.counterSubject.asObservable();
  }

  putLimit(data: number) {
    this.limitSubject.next(data)
  }

  getLimit() {
    return this.limitSubject.asObservable();
  }

  putAction(data: any) {
    this.actionSubject.next(data)
  }
  
  getAction() {
    return this.actionSubject.asObservable();
  }

  putCount(data: number) {
    this.countSubject.next(data)
  }

  getCount() {
    return this.countSubject.asObservable();
  }

  putLogs(data: string[]) {
    this.logSubject.next(data)
  }

  getLogs() {
    return this.logSubject.asObservable();
  }

  putBtnClick(data: any) {
    this.btnSubject.next(data)
  }

  getBtnClick() {
    return this.btnSubject.asObservable();
  }

}
