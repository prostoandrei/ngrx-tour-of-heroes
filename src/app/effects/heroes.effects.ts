// tslint:disable:member-ordering
import { HeroService } from '../services/hero.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { ActionTypes } from '../actions/heroes';

@Injectable()
export class HeroesEffects {

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private store: Store<any>
  ) { }



















// @Effect() getHeroes$ = this.actions$
  //   .ofType(ActionTypes.GET_HEROES)
  //   .switchMap(() =>  // filter
  //     this.heroService.getHeroes() //
  //       .map(heroes => ({ type: ActionTypes.GET_HEROES_SUCCESS, payload: heroes }))
  //       .catch(() => Observable.of({type: ActionTypes.GET_HEROES_ERROR })));

  @Effect() createHero$ = this.actions$
    .ofType(ActionTypes.CREATE_HERO)
    .switchMap((action) =>
      this.heroService.create(action.payload)
        .map(hero => ({ type: ActionTypes.CREATE_HERO_SUCCESS, payload: hero }))
        .catch(() => Observable.of({type: ActionTypes.CREATE_HERO_ERROR })));

  @Effect() deleteHero$ = this.actions$
    .ofType(ActionTypes.DELETE_HERO)
    .switchMap((action) =>
      this.heroService.delete(action.payload)
        .map(() => ({ type: ActionTypes.DELETE_HERO_SUCCESS, payload: action.payload }))
        .catch(() => Observable.of({type: ActionTypes.DELETE_HERO_ERROR })));

}
