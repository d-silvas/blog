import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostsState } from './state';

export const getPostsState = createFeatureSelector<PostsState>('posts');

/**
 * @TODO defaults ??
 */

export const getPosts = createSelector(
  getPostsState,
  (state: PostsState) => state.posts.data?.content || []
);

export const getPageIndex = createSelector(
  getPostsState,
  (state: PostsState) => state.posts.data?.page || 0
);

export const getSize = createSelector(
  getPostsState,
  (state: PostsState) => state.posts.data?.size || 10
);

export const getTotalElements = createSelector(
  getPostsState,
  (state: PostsState) => state.posts.data?.totalElements || 0
);
