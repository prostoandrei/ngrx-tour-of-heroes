import { HeroService } from '../services/hero.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { ActionTypes } from '../actions/heroes';

@Injectable()
export class HeroesEffects {

  @Effect() getHeroes$ = this.actions$
    .ofType(ActionTypes.GET_HEROES)
    .withLatestFrom(
      this.store.select('searchFilter'),
      (filter) => filter
    )
    .switchMap((filter) =>  // filter
      this.heroService.getHeroes(filter) //
        .map(heroes => ({ type: ActionTypes.GET_HEROES_SUCCESS, payload: heroes }))
        .catch(() => Observable.of({type: ActionTypes.GET_HEROES_ERROR })));

  @Effect() createHero$ = this.actions$
    .ofType(ActionTypes.CREATE_HERO)
    .switchMap((action) =>
      this.heroService.create(action.payload)
        .map(hero => ({ type: ActionTypes.CREATE_HERO_SUCCESS, payload: hero }))
        .catch(() => Observable.of({type: ActionTypes.GET_HEROES_ERROR })));

  @Effect() deleteHero$ = this.actions$
    .ofType(ActionTypes.DELETE_HERO)
    .switchMap((action) =>
      this.heroService.delete(action.payload)
        .map(() => ({ type: ActionTypes.DELETE_HERO_SUCCESS, payload: action.payload }))
        .catch(() => Observable.of({type: ActionTypes.DELETE_HERO_ERROR })));

  // @Effect() addTodo$ = this.actions$
  //   .ofType(ADD_TODO)
  //   .switchMap(action =>
  //     this.heroService.addTodo(action.payload.title)
  //       .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
  //       .catch(() => Observable.of({type: ADD_TODO_ERROR})));

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private store: Store<any>
  ) { }

}
