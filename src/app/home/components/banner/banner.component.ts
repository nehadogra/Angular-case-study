import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('scroll', [
      state('on', style({ right: '-100px' })),
      transition('* => *', [
        style({ right: '-100px' }),
        animate(10000, style({ right: '100%' }))
      ])
    ])
  ]
})

export class BannerComponent implements OnInit {
  msgToDisplay: string = 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'
  state = 0;

  constructor() { }

  ngOnInit(): void { }

  scrollDone() {
    this.state++;
  }

}
