import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { AppState } from './state';

export const reducers: ActionReducerMap<AppState> = {};

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];
