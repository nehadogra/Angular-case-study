import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {
  @Input() logMsgs: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
