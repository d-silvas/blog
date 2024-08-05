import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { select, Store } from '@ngrx/store';
import { filter, Observable, Subject, takeUntil } from 'rxjs';

import type { Post } from '../models';
import * as postsViewActions from './store/actions';
import * as postsSelectors from './store/selectors';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss'],
})
export class PostsViewComponent implements OnInit, OnDestroy {
  @ViewChild('postContent', { static: true, read: ElementRef })
  postContent: ElementRef | null = null;

  post$: Observable<Post | null>;

  constructor(
    private readonly _store: Store,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.post$ = this._store.pipe(
      select(postsSelectors.getPost),
      takeUntilDestroyed(),
    );
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      const id: number = Number(paramMap.get('postId'));
      if (id) {
        this._store.dispatch(postsViewActions.loadPost({ id }));
      }
    });
    this.post$.pipe(filter(Boolean)).subscribe((p) => {
      // console.log(p, this.postContent);
      if (p && this.postContent) {
        // this.postContent.nativeElement.innerHTML = p.content;
        // setTimeout(() => {
        //   console.log((window as any).MathJax);
        // }, 2000);
      }
    });
  }

  ngOnDestroy() {
    this._store.dispatch(postsViewActions.reset());
  }
}
