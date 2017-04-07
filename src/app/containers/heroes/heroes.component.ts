import { Observable } from 'rxjs/Rx';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
  ) {
    this.heroService
      .getHeroes()
      .then(res => this.heroes = res);
  }
}




























// changeFilter(filter) {
//     this.store.dispatch({ type: SET_SEARCH_FILTER, payload: filter });
//     this.store.dispatch({ type: ActionTypes.GET_HEROES });
//   }

// this.store.dispatch({ type: ActionTypes.GET_HEROES });
    // this.createHeroSuccess$ = heroesEffects.createHero$.filter(
    //   (action) => action.type === ActionTypes.CREATE_HERO_SUCCESS
    // );
    // this.activeFilter = store.select('searchFilter').take(1);
