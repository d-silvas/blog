import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';

import type { PageableResource } from '@api/models';

import type { PostSummary } from '../../models';
import { PostsService } from '../../services';
import * as postsListActions from './actions';
import { MathJaxService } from '@ui/mathjax/math-jax.service';

@Injectable()
export class PostsListEffects {
  loadPosts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(postsListActions.loadPosts),
      switchMap(({ pageEvent }) =>
        this._postsService
          .getPosts(pageEvent)
          .pipe(
            map((posts: PageableResource<PostSummary>) =>
              postsListActions.loadPostsSuccess({ posts }),
            ),
          ),
      ),
    ),
  );

  renderMathJax$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(postsListActions.loadPostsSuccess),
        tap(() => this._mathJaxService.renderMathJax()),
      ),
    { dispatch: false },
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _postsService: PostsService,
    private readonly _mathJaxService: MathJaxService,
  ) {}
}
