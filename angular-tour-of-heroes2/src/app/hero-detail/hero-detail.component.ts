import { Component, OnInit, Input} from '@angular/core';
import {HeroInfo} from '../heroInfo'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input()hero:HeroInfo;

  constructor() { }

  ngOnInit() {
  }

}
