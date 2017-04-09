import { HeroesState } from '../../reducers/heroes';
import { SET_SEARCH_FILTER } from '../../reducers/heroes-search-filter.reducer';
import { HeroesEffects } from '../../effects/heroes.effects';
import { Observable } from 'rxjs/Rx';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionTypes } from '../../actions/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  selectedHero: Hero;
  heroes: Observable<any>;
  activeFilter: Observable<any>;

  public createHeroSuccess$: Observable<any>;

  constructor(
    private store: Store<HeroesState>,
    private heroesEffects: HeroesEffects
  ) {
    this.store.dispatch({ type: ActionTypes.GET_HEROES });
    this.heroes = store.select('heroes');
    this.createHeroSuccess$ = heroesEffects.createHero$.filter(
      (action) => action.type === ActionTypes.CREATE_HERO_SUCCESS
    );
    this.activeFilter = store.select('searchFilter').take(1);
  }

  changeFilter(filter) {
    this.store.dispatch({ type: SET_SEARCH_FILTER, payload: filter });
    this.store.dispatch({ type: ActionTypes.GET_HEROES });
  }
}
