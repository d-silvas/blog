import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsViewComponent } from './posts-view/posts-view.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: ':postId', component: PostsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
