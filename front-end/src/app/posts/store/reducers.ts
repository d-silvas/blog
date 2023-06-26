import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './actions';
import { postsInitialState, PostsState } from './state';

const reducer = createReducer(
  postsInitialState,
  on(actions.loadPosts, (state): PostsState => ({
    ...state,
    posts: {
      data: null,
      loading: true,
      error: null,
    },
  })),
  on(actions.loadPostsSuccess, (state, { posts }): PostsState => ({
    ...state,
    posts: {
      data: posts,
      loading: false,
      error: null,
    },
  })),
  on(actions.loadPostsFail, (state, { error }): PostsState => ({
    ...state,
    posts: {
      data: null,
      loading: false,
      error,
    },
  })),
  on(actions.reset, () => postsInitialState)
);

export const postsReducer = (state: PostsState, action: Action) =>
  reducer(state, action);
