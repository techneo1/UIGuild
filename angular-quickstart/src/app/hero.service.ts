import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';

// Services can be provided Child Component, Application Shell or App Module
@Injectable()
export class HeroService {
  // Can get data from a web service, local storage or a mock data source.
  constructor() { }

  getHeroes(): Hero[] {
      return Heroes;
  }

}
