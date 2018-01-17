import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { 
      console.log('constructor ran..');
  }

  ngOnInit() {
      console.log('ngOnInit ran..');
  }
}