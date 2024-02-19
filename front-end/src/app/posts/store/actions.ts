import { PageEvent } from '@angular/material/paginator';
import { createAction, props } from '@ngrx/store';

import { PageableResource } from '../../api/api-pageable-resource-request';
import { PostSummary } from '../post-summary';

export enum PostsActionTypes {
  loadPosts = '[Posts] Load Posts',
  loadPostsSuccess = '[Posts] Load Posts Success',
  loadPostsFail = '[Posts] Load Posts Fail',
  reset = '[Posts] Reset',
}

export const loadPosts = createAction(
  PostsActionTypes.loadPosts,
  props<{ pageEvent: PageEvent | null }>()
);

export const loadPostsSuccess = createAction(
  PostsActionTypes.loadPostsSuccess,
  props<{ posts: PageableResource<PostSummary> }>()
);

export const loadPostsFail = createAction(
  PostsActionTypes.loadPostsFail,
  props<{ error: any }>()
);

export const reset = createAction(PostsActionTypes.reset);
