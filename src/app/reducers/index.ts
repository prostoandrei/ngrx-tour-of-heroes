import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { heroesReducer, HeroesState } from './heroes';

export interface State {
  heroes: HeroesState;
  router: RouterState;
}

const reducers = {
  router: routerReducer,
  heroes: heroesReducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}
