import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import * as postsViewActions from './actions';
import { postsViewInitialState, type PostsViewState } from './state';

const reducer = createReducer(
  postsViewInitialState,
  on(
    postsViewActions.loadPost,
    (state): PostsViewState => ({
      ...state,
      post: {
        data: null,
        loading: true,
        error: null,
      },
    })
  ),
  on(
    postsViewActions.loadPostSuccess,
    (state, { post }): PostsViewState => ({
      ...state,
      post: {
        data: post,
        loading: false,
        error: null,
      },
    })
  ),
  on(
    postsViewActions.loadPostFail,
    (state, { error }): PostsViewState => ({
      ...state,
      post: {
        data: null,
        loading: false,
        error,
      },
    })
  ),
  on(postsViewActions.reset, () => postsViewInitialState)
);

export const postsViewReducer: ActionReducer<PostsViewState> = (
  state: PostsViewState | undefined,
  action: Action
) => reducer(state, action);
