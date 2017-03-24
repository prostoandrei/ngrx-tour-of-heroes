import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
  router: RouterState;
}

const reducers = {
  router: routerReducer,
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
  // if (environment.production) {
  // } else {
  //   return developmentReducer(state, action);
  // }
}
