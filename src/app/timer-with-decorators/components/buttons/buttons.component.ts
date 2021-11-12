import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  msgs: string[] = [];
  logMsg: string[] = [];
  startClicked: number = 0;
  pauseClicked: number = 0;
  counterLimit: number = 0;
  startCounter = false;
  @Output() limit = new EventEmitter();
  @Output() action = new EventEmitter();
  @Output() logger = new EventEmitter();
  @Output() btnClicked = new EventEmitter();
  @Input() currentCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startPauseCounter() {
    this.startCounter = !this.startCounter
    this.action.emit({ startCounter: this.startCounter, reset: false });
    if (!this.startCounter) {
      setTimeout(() => {
        this.msgs.push(`Paused at ${this.currentCounter}`);
      }, 300);
      this.logMsg.push(`Paused at ${moment(Date.now()).format('DD-MM-YYYY hh:mm:ss a')}`);
      this.pauseClicked++;
    }
    else {
      this.logMsg.push(`Started at ${moment(Date.now()).format('DD-MM-YYYY hh:mm:ss a')}`);
      this.startClicked++;
    }
    this.logger.emit(this.logMsg);
    this.btnClicked.emit({
      startClicked: this.startClicked,
      pauseClicked: this.pauseClicked
    })
  }

  resetCounter() {
    this.logMsg.length = 0;
    this.msgs.length = 0;
    this.startClicked = 0;
    this.pauseClicked = 0;
    this.btnClicked.emit({
      startClicked: this.startClicked,
      pauseClicked: this.pauseClicked
    })
    this.startCounter = false;
    this.limit.emit({ limit: this.counterLimit, reset: true });
    this.action.emit({ startCounter: this.startCounter, reset: true });
  }

  onLimitChange() {
    this.limit.emit({ limit: this.counterLimit, reset: false });
  }

}
