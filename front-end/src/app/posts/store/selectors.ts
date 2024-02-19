import { createFeatureSelector, createSelector } from '@ngrx/store';

import type { PostsState } from './state';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPostsListState = createSelector(
  getPostsState,
  (state: PostsState) => state.list
);

export const getPostsViewState = createSelector(
  getPostsState,
  (state: PostsState) => state.view
);
