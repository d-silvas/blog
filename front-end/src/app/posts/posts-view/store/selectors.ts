import { createSelector } from '@ngrx/store';

import { getPostsViewState } from '../../store/selectors';
import type { PostsViewState } from './state';

export const getPost = createSelector(
  getPostsViewState,
  (state: PostsViewState) => state.post.data
);

export const isPostLoading = createSelector(
  getPostsViewState,
  (state: PostsViewState) => state.post.loading
);

export const getPostError = createSelector(
  getPostsViewState,
  (state: PostsViewState) => state.post.error
);
