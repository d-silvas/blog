import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { PageableResource } from '../../api/api-pageable-resource-request';
import { Post } from '../post';
import * as postsActions from './actions';
import { PostsService } from '../posts.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(postsActions.loadPosts),
      switchMap(({ pageEvent }) =>
        this._postsService
          .getPosts(pageEvent)
          .pipe(
            map((posts: PageableResource<Post>) =>
              postsActions.loadPostsSuccess({ posts })
            )
          )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _postsService: PostsService
  ) { }
}
