import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { Post } from '../../models';
import { PostsService } from '../../services';
import * as postsViewActions from './actions';

@Injectable()
export class PostsViewEffects {
  loadPosts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(postsViewActions.loadPost),
      switchMap(({ id }) =>
        this._postsService
          .getPost(id)
          .pipe(map((post: Post) => postsViewActions.loadPostSuccess({ post })))
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _postsService: PostsService
  ) {}
}
