import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { heroesReducer, HeroesState } from './heroes';
import { searchFilter, SearchFilterState } from './heroes-search-filter.reducer';

export interface State {
  heroes: HeroesState;
  router: RouterState;
  searchFilter: SearchFilterState;
}

const reducers = {
  router: routerReducer,
  heroes: heroesReducer,
  searchFilter: searchFilter
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
  // if (environment.production) {
  // } else {
  //   return developmentReducer(state, action);
  // }
}
