import { HeroService } from './services/hero.service';
import { Hero } from './models/hero';
import { Component, OnInit } from '@angular/core';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroes =

    ;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
