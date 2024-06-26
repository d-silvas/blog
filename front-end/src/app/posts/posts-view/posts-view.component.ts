import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  private readonly _destroy$ = new Subject<void>();

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
    this.post$
      .pipe(filter(Boolean), takeUntil(this._destroy$))
      .subscribe((p) => {
        console.log(p, this.postContent);
        if (p && this.postContent) {
          this.postContent.nativeElement.innerHTML = p.content;
          // Execute all script tags that were in the post contents
          // See https://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml
          // Yes this is a security vulnerability
          Array.from(
            this.postContent.nativeElement.querySelectorAll('script')
          ).forEach((oldScriptEl: any) => {
            const newScriptEl = document.createElement('script');

            Array.from(oldScriptEl.attributes).forEach((attr: any) => {
              newScriptEl.setAttribute(attr.name, attr.value);
            });

            const scriptText = document.createTextNode(oldScriptEl.innerHTML);
            newScriptEl.appendChild(scriptText);

            oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
          });
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._store.dispatch(postsViewActions.reset());
  }
}
