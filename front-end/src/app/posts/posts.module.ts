import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UiModule } from '../ui';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListEffects } from './posts-list/store/effects';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostsViewEffects } from './posts-view/store/effects';
import { postsReducer } from './store/reducers';

@NgModule({
  declarations: [PostsListComponent, PostsViewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    UiModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsListEffects, PostsViewEffects]),
  ],
})
export class PostsModule {}
