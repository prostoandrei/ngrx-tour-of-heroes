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

  public createHeroSuccess$: Observable<any>;

  constructor(
    private store: Store<any>,
    private heroService: HeroService,
    private heroesEffects: HeroesEffects
  ) {
    this.store.dispatch({ type: ActionTypes.GET_HEROES });
    this.heroes = store.select('heroes');
    this.createHeroSuccess$ = heroesEffects.createHero$.filter(
      (action) => action.type === ActionTypes.CREATE_HERO_SUCCESS
    );
  }

}
