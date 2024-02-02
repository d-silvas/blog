import { ApiPageableResourceRequest } from '../../api/api-pageable-resource-request';
import { AppState } from '../../store/state';
import { Post } from '../post';

export interface PostsRootState extends AppState {
  posts: PostsState;
}

export interface PostsState {
  posts: ApiPageableResourceRequest<Post>;
}

export const postsInitialState: PostsState = {
  posts: { data: null, loading: false, error: null },
};
