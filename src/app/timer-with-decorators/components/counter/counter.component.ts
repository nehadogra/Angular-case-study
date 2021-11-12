import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  counter: number = 0;
  interval: any;
  @Input() counterLimit: number = 0;
  @Input() startCounter = false;
  @Output() currentCount = new EventEmitter();
  private _reset = false;
  public get reset() { return this._reset; }
  @Input() set reset(newValue) {
    this._reset = newValue;
    if (this._reset)
      this.resetCounter();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.counterLimit && this.counterLimit > 0) {
      this.counter = this.counterLimit;
    }
    if (changes.startCounter) {
      this.startPauseCounter(this.startCounter);
    }
  }

  startPauseCounter(start: boolean) {
    if (start === true) {
      this.interval = setInterval(() => {
        this.counter--;
        if (this.counter <= 0) {
          clearInterval(this.interval);
        }
      }, 1000);
    }
    else {
      this.currentCount.emit(this.counter);
      clearInterval(this.interval);
    }
  }

  resetCounter() {
    clearInterval(this.interval);
    this.counter = this.counterLimit;
  }

}
