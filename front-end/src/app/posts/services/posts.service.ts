import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import type { PageableResource } from '@api/models';
import { ApiService } from '@api/services';

import type { Post, PostDto, PostSummary, PostSummaryDto } from '../models';
import { PostMapperService } from './post-mapper.service';
import { PostSummaryMapperService } from './post-summary-mapper.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _postMapperService: PostMapperService,
    private readonly _postSummaryMapperService: PostSummaryMapperService,
    private readonly _apiService: ApiService
  ) {}

  getPosts(
    pageEvent: PageEvent | null
  ): Observable<PageableResource<PostSummary>> {
    return this._http
      .get<PageableResource<PostSummaryDto>>(
        this._apiService.createApiUrl('posts'),
        { params: this._apiService.createPaginationHttpParams(pageEvent) }
      )
      .pipe(
        map((postsResource: PageableResource<PostSummaryDto>) => ({
          ...postsResource,
          content: postsResource.content.map((t: PostSummaryDto) =>
            this._postSummaryMapperService.map(t)
          ),
        }))
      );
  }

  getPost(id: number): Observable<Post> {
    return this._http
      .get<PostDto>(this._apiService.createApiUrl(`posts/${id}`))
      .pipe(map((postDto: PostDto) => this._postMapperService.map(postDto)));
  }
}
