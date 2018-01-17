import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import {MessageService} from './message.service';

// Services can be provided Child Component, Application Shell or App Module
@Injectable()
export class HeroService {
  // Can get data from a web service, local storage or a mock data source.
  constructor(private messageService: MessageService) { }

  // HttpClient.get<Hero[]> 
  getHeroes(): Observable<Hero[]> {
      return of(Heroes);
  }

}
