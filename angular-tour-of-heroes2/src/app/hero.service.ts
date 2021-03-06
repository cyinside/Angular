import { Injectable } from '@angular/core';
import {HeroInfo} from './heroInfo';
import {HEROES} from './mock-heroes';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService){ }
  getHeroes():Observable<HeroInfo[]>{
  	this.messageService.add('HeroService: fetched heroes')
  	return of(HEROES);
  }
}
