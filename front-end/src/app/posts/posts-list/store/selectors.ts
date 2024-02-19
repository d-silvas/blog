import { createSelector } from '@ngrx/store';

import { getPostsListState } from '../../store/selectors';
import { PostsListState } from './state';

export const getPosts = createSelector(
  getPostsListState,
  (state: PostsListState) => state.posts.data?.content || []
);

export const getPageIndex = createSelector(
  getPostsListState,
  // These defaults do nothing, these data should come from the API (assuming no error).
  // Front-end does not keep its own page, size, and totalElements
  (state: PostsListState) => state.posts.data?.page || null
);

export const getSize = createSelector(
  getPostsListState,
  (state: PostsListState) => state.posts.data?.size || null
);

export const getTotalElements = createSelector(
  getPostsListState,
  (state: PostsListState) => state.posts.data?.totalElements || null
);
