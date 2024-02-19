import { ApiRequest } from '@api/models';

import type { Post } from '../../models';

export interface PostsViewState {
  post: ApiRequest<Post | null>;
}

export const postsViewInitialState: PostsViewState = {
  post: { data: null, loading: false, error: null },
};
