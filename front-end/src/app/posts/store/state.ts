import { ApiPageableResourceRequest } from '../../api/api-pageable-resource-request';
import { AppState } from '../../store/state';
import { PostSummary } from '../post-summary';

export interface PostsRootState extends AppState {
  posts: PostsState;
}

export interface PostsState {
  posts: ApiPageableResourceRequest<PostSummary>;
}

export const postsInitialState: PostsState = {
  posts: { data: null, loading: false, error: null },
};
