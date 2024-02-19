import { PageEvent } from '@angular/material/paginator';

import { createAction, props } from '@ngrx/store';

import type { PageableResource } from '@api/models';

import type { PostSummary } from '../../models';

export enum PostsListActionTypes {
  loadPosts = '[PostsList] Load Posts',
  loadPostsSuccess = '[PostsList] Load Posts Success',
  loadPostsFail = '[PostsList] Load Posts Fail',
  reset = '[PostsList] Reset',
}

export const loadPosts = createAction(
  PostsListActionTypes.loadPosts,
  props<{ pageEvent: PageEvent | null }>()
);

export const loadPostsSuccess = createAction(
  PostsListActionTypes.loadPostsSuccess,
  props<{ posts: PageableResource<PostSummary> }>()
);

export const loadPostsFail = createAction(
  PostsListActionTypes.loadPostsFail,
  props<{ error: any }>()
);

export const reset = createAction(PostsListActionTypes.reset);
