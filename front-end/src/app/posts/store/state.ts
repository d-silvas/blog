import type { AppState } from '../../store/state';
import type { PostsListState } from '../posts-list/store/state';
import { PostsViewState } from '../posts-view/store/state';

export interface PostsRootState extends AppState {
  posts: PostsState;
}

export interface PostsState {
  list: PostsListState;
  view: PostsViewState;
}
