import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  startClicked: number = 0;
  pauseClicked: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) {
    this.subscription = this.timerService.getBtnClick().subscribe(clicks => {
      if (clicks) {
        this.startClicked = clicks.startClicked;
        this.pauseClicked = clicks.pauseClicked;
      } else {
        this.startClicked = 0;
        this.pauseClicked = 0;
      }
    });
  }

  ngOnInit(): void {
  }

}
