import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { UiModule } from '../ui';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    UiModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsModule {}
