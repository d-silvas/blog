import { createAction, props } from '@ngrx/store';

import type { Post } from '../../models';

export enum PostsViewActionTypes {
  loadPost = '[PostsView] Load Post',
  loadPostSuccess = '[PostsView] Load Post Success',
  loadPostFail = '[PostsView] Load Post Fail',
  reset = '[PostsView] Reset',
}

export const loadPost = createAction(
  PostsViewActionTypes.loadPost,
  props<{ id: number }>()
);

export const loadPostSuccess = createAction(
  PostsViewActionTypes.loadPostSuccess,
  props<{ post: Post }>()
);

export const loadPostFail = createAction(
  PostsViewActionTypes.loadPostFail,
  props<{ error: any }>()
);

export const reset = createAction(PostsViewActionTypes.reset);
