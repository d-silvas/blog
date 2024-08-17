import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { Post } from '../../models';
import { PostsService } from '../../services';
import * as postsViewActions from './actions';
import { MathJaxService } from '@ui/mathjax/math-jax.service';
import { of } from 'rxjs';

@Injectable()
export class PostsViewEffects {
  loadPosts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(postsViewActions.loadPost),
      switchMap(({ id }) =>
        this._postsService
          .getPost(id)
          .pipe(
            map((post: Post) => postsViewActions.loadPostSuccess({ post })),
          ),
      ),
    ),
  );

  renderMathJax$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(postsViewActions.loadPostSuccess),
        switchMap(() => {
          this._mathJaxService.renderMathJax();
          return of(null);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _postsService: PostsService,
    private readonly _mathJaxService: MathJaxService,
  ) {}
}
