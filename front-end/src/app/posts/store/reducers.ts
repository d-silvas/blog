import { ActionReducerMap } from '@ngrx/store';

import { postsListReducer } from '../posts-list/store/reducers';
import { postsViewReducer } from '../posts-view/store/reducers';
import type { PostsState } from './state';

export const postsReducer: ActionReducerMap<PostsState> = {
  list: postsListReducer,
  view: postsViewReducer,
};
