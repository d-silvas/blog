import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import type { PostSummary } from '../models';
import * as postsListActions from './store/actions';
import * as postsListSelectors from './store/selectors';
import { PageEvent } from '@ui/paginator';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts$: Observable<PostSummary[]>;
  pageIndex$: Observable<number | null>;
  size$: Observable<number | null>;
  totalElements$: Observable<number | null>;

  constructor(
    private readonly _store: Store,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.posts$ = this._store.pipe(select(postsListSelectors.getPosts));
    this.pageIndex$ = this._store.pipe(select(postsListSelectors.getPageIndex));
    this.size$ = this._store.pipe(select(postsListSelectors.getSize));
    this.totalElements$ = this._store.pipe(
      select(postsListSelectors.getTotalElements),
    );
  }

  ngOnInit() {
    this._store.dispatch(
      postsListActions.loadPosts({
        pageEvent: { pageSize: 10, pageIndex: 0, length: 0 },
      }),
    );
  }

  ngOnDestroy() {
    this._store.dispatch(postsListActions.reset());
  }

  paginateList(pageEvent: PageEvent) {
    this._store.dispatch(postsListActions.loadPosts({ pageEvent }));
  }

  onPostSelected(post: PostSummary) {
    this._router.navigate([post.id], { relativeTo: this._activatedRoute });
  }
}
