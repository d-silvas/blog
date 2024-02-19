import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import * as postsListActions from './actions';
import { postsListInitialState, type PostsListState } from './state';

const reducer = createReducer(
  postsListInitialState,
  on(
    postsListActions.loadPosts,
    (state): PostsListState => ({
      ...state,
      posts: {
        data: null,
        loading: true,
        error: null,
      },
    })
  ),
  on(
    postsListActions.loadPostsSuccess,
    (state, { posts }): PostsListState => ({
      ...state,
      posts: {
        data: posts,
        loading: false,
        error: null,
      },
    })
  ),
  on(
    postsListActions.loadPostsFail,
    (state, { error }): PostsListState => ({
      ...state,
      posts: {
        data: null,
        loading: false,
        error,
      },
    })
  ),
  on(postsListActions.reset, () => postsListInitialState)
);

export const postsListReducer: ActionReducer<PostsListState> = (
  state: PostsListState | undefined,
  action: Action
) => reducer(state, action);
