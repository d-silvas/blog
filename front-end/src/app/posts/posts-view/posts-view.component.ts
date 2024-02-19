import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import type { Post } from '../models';
import * as postsViewActions from './store/actions';
import * as postsSelectors from './store/selectors';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss'],
})
export class PostsViewComponent implements OnInit, OnDestroy {
  post$: Observable<Post | null>;

  constructor(
    private readonly _store: Store,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this.post$ = this._store.pipe(select(postsSelectors.getPost));
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      const id: number = Number(paramMap.get('postId'));
      if (id) {
        this._store.dispatch(postsViewActions.loadPost({ id }));
      }
    });
  }

  ngOnDestroy() {
    this._store.dispatch(postsViewActions.reset());
  }
}
