import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css']
})
export class DynamicDivsComponent implements OnInit {

  containers: number = 20;
  scrollTop: number = 0;
  constructor() { }

  ngOnInit() { }

  alert(i: number) {
    window.alert(`Button ${i + 1} is clicked.`);
  }

  getContainers() {
    return Array(this.containers);
  }

  onScroll(event: any) {
    let current = event.target.scrollTop;
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 50) {
      if (this.scrollTop != current) {
        if (current > this.scrollTop) {
          if (current - this.scrollTop > 180) {
            this.scrollTop = current;
            this.containers += 3;
            this.getContainers();
          }
        }
      }
    }
  }

}
