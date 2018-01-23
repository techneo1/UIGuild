import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
      <!--input #box (keyup)="0">
      <p>{{box.value}}</p-->
      <input #box (keyup)="onKey(box.value)">
      <p>{{values}}</p>
  `
})
export class LoopBackComponent implements OnInit {
  values = '';
  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
      this.values += value + '|';
  }

}
