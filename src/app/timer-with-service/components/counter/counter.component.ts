import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0;
  interval: any;
  counterLimit: number = 0;
  startCounter = false;
  reset = false;
  subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) {
    this.subscription = this.timerService.getData().subscribe(message => {
      this.counterLimit = message.limit;
      this.startCounter = message.startCounter;
      this.reset = message.reset;
      if (this.counterLimit) {
        this.counter = this.counterLimit;
      }
      if (this.startCounter) {
        this.startCount();
      }
      else {
        this.pauseCount();
      }
      if (this.reset) {
        this.resetCounter();
      }

    });
  }

  ngOnInit(): void {
  }

  startCount() {
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseCount() {
    this.timerService.putCount(this.counter);
    clearInterval(this.interval);
  }

  resetCounter() {
    this.counter = this.counterLimit;
    clearInterval(this.interval);
  }

}
