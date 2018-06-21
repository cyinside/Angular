import { Component, OnInit } from '@angular/core';
import { HeroInfo } from '../heroInfo';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes : HeroInfo[];
 
  selectedHero: HeroInfo;
 
 
  constructor(private heroService:HeroService) { }
 
  ngOnInit() {
    this.getHeroes();  
  }

  getHeroes(){
     this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
}