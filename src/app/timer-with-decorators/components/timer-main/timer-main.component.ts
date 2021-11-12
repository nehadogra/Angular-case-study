import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-main',
  templateUrl: './timer-main.component.html',
  styleUrls: ['./timer-main.component.css']
})

export class TimerMainComponent implements OnInit {
  counterLimit: number = 0;
  startClicked: number = 0;
  pauseClicked: number = 0;
  startCounter = false;
  reset = false;
  logMsgs: string[] = [];
  currentCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  limit(event: any) {
    this.counterLimit = event.limit;
    this.reset = event.reset;
  }

  action(event: any) {
    this.startCounter = event.startCounter;
    this.reset = event.reset;
  }

  logger(event: string[]) {
    this.logMsgs = event;
  }

  currentCount(event: number) {
    this.currentCounter = event;
  }

  btnClicked(event: any) {
    this.startClicked = event.startClicked;
    this.pauseClicked = event.pauseClicked;
  }

}
