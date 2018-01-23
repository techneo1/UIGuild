import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() { 
      console.log('constructor ran..');
  }

  ngOnInit() {
      console.log('ngOnInit ran..');
      this.name = 'Srikanth Shet';
      this.age = 30;
      this.address = {
          street: 'M.G.Road',
          city: 'Bangalore',
          state: 'Karnataka'
      };
      this.hobbies = ['Write code', 'Watch movies', 'Listen to Music'];

  }

}

interface Address {
  street: string,
  city: string,
  state: string 
}