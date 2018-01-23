import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
        <h1>app-click-me component</h1>
        <button (click)="onClickMe()">Click Me!</button>
        {{ clickMessage }}
  `
})
export class ClickMeComponent implements OnInit {
  clickMessage = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!' ;
  }

}
