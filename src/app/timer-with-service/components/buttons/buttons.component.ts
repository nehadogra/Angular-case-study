import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';
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
  subscription: Subscription = new Subscription();
  currentCounter: number = 0;

  constructor(private timerService: TimerService) {
    this.subscription = this.timerService.getCount().subscribe(count => {
      if (count) {
        this.currentCounter = count;
      } else {
        this.currentCounter = 0;
      }
    });
  }

  ngOnInit(): void {
  }

  startPauseCounter() {
    this.startCounter = !this.startCounter
    this.timerService.putData({ startCounter: this.startCounter, reset: false })
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

    this.timerService.putLogs(this.logMsg);
    this.timerService.putBtnClick({
      startClicked: this.startClicked,
      pauseClicked: this.pauseClicked
    }
    )
  }

  resetCounter() {
    this.logMsg.length = 0;
    this.msgs.length = 0;
    this.startClicked = 0;
    this.pauseClicked = 0;
    this.startCounter = false;
    this.timerService.putData({ limit: this.counterLimit, reset: true });
    this.timerService.putAction({ startCounter: this.startCounter, reset: true });
    this.timerService.putBtnClick({
      startClicked: this.startClicked,
      pauseClicked: this.pauseClicked
    })
  }

  onLimitChange() {
    this.timerService.putData({ limit: this.counterLimit, reset: false })
  }

}
