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

  // Passing $event is a dubious practice:
  // It breaks the separation of concerns b/s the template and the component
  onKey(event: KeyboardEvent) {
      // this.values += event.target.value + '|';
      this.values += (<HTMLInputElement>event.target).value + '|';
  }
}
