import type { ApiPageableResourceRequest } from '@api/models';

import type { PostSummary } from '../../models';

export interface PostsListState {
  posts: ApiPageableResourceRequest<PostSummary>;
}

export const postsListInitialState: PostsListState = {
  posts: { data: null, loading: false, error: null },
};
