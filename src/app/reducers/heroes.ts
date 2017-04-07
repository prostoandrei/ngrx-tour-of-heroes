import { Hero } from '../models/hero';
import { Action } from '@ngrx/store';
import { ActionTypes} from '../actions/heroes';

export interface HeroesState {
  data: Array<Hero>;
  pending: Boolean;
  error: Error | null;
}

export const initialState: HeroesState = {
  data: [],
  pending: false,
  error: null
};

export const heroesReducer = (state = initialState, action: Action) => {
  switch (action.type) {





































    // case ActionTypes.GET_HEROES:
    //   return Object.assign({}, state, { pending: true, error: null });
    // case ActionTypes.GET_HEROES_SUCCESS:
    //   return Object.assign({}, state, { pending: false, error: null, data: action.payload });
    // case ActionTypes.GET_HEROES_ERROR:
    //   return Object.assign({}, state, { pending: false, error: 'Error!' });








    case ActionTypes.DELETE_HERO:
      return Object.assign({}, state, { pending: true, error: null });
    case ActionTypes.DELETE_HERO_SUCCESS:
      return Object.assign(
        {},
        state,
        { pending: false, error: null, data: [...state.data.filter((hero) => hero.id !== action.payload )] }
      );
    case ActionTypes.DELETE_HERO_ERROR:
      return Object.assign({}, state, { pending: false, error: 'Error!' });

    case ActionTypes.CREATE_HERO:
      return Object.assign({}, state, { pending: true, error: null });
    case ActionTypes.CREATE_HERO_SUCCESS:
      return Object.assign({}, state, { pending: false, error: null, data: [...state.data, action.payload] });
    case ActionTypes.CREATE_HERO_ERROR:
      return Object.assign({}, state, { pending: false, error: 'Error!' });
    default: { return state; }
  }
};
