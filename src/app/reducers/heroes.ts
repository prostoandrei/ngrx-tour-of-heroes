import { Hero } from '../models/hero';
import { Action } from '@ngrx/store';
import { ActionTypes} from '../actions/heroes';

export interface HeroesState {
  data: Array<Hero>;
}

export const initialState: HeroesState = {
  data: []
};

export const heroesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE:
    case ActionTypes.DELETE:
      return state;
    default: { return state; }
  }
}
