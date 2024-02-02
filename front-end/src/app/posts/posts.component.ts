import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post';
import * as postsSelectors from './store/selectors';
import * as postsActions from './store/actions';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  pageIndex$: Observable<number>;
  size$: Observable<number>;
  totalElements$: Observable<number>;

  @Output() postSelected = new EventEmitter<Post>();

  constructor(private readonly _store: Store) {
    this.posts$ = this._store.pipe(select(postsSelectors.getPosts));
    this.pageIndex$ = this._store.pipe(select(postsSelectors.getPageIndex));
    this.size$ = this._store.pipe(select(postsSelectors.getSize));
    this.totalElements$ = this._store.pipe(
      select(postsSelectors.getTotalElements)
    );
  }

  ngOnInit() {
    this._store.dispatch(
      postsActions.loadPosts({
        pageEvent: { pageSize: 9, pageIndex: 0, length: 0 },
      })
    );
  }

  ngOnDestroy() {
    this._store.dispatch(postsActions.reset());
  }

  paginateList(pageEvent: PageEvent) {
    this._store.dispatch(postsActions.loadPosts({ pageEvent }));
  }

  onPostSelected(post: Post) {
    this.postSelected.next(post);
  }
}
