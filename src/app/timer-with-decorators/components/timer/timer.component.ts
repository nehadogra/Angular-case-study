import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() startClicked: number = 0;
  @Input() pauseClicked: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
