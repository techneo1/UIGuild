import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = Heroes;
  selectedHero: Hero;
  
  constructor() { }

  // Initialization logic 
  ngOnInit() {
     
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
