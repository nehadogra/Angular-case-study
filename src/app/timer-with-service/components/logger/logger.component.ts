import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  logMsgs: string[] = [];
  subscription: Subscription = new Subscription();
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.subscription = this.timerService.getLogs().subscribe(message => {
      if (message) {
        this.logMsgs = message;
      } else {
        this.logMsgs = [];
      }
    });
  }

}
