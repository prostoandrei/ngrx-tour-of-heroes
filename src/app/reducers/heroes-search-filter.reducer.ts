import { search } from '@ngrx/router-store';
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';

export interface SearchFilterState {
  searchName: String | null;
}

export const initialState: SearchFilterState = {
  searchName: null
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_SEARCH_FILTER,
    payload: filter
  };
}

export const searchFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return Object.assign({}, state, { searchName: action.payload } ) ;
    default:
      return state;
  }
};
