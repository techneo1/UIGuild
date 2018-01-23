import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
      <h3>2. Get user input from the $event object<h3>
      <input (keyup)="onKey($event)">
      <p>{{values}}</p>
  `
})
export class KeyupComponent implements OnInit {
  values = '';
  constructor() { }

  ngOnInit() {
  }


  onKey(event) {
      this.values += event.target.value + '|';
  }
}
