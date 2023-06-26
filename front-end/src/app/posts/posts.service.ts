import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageableResource } from '../api/api-pageable-resource-request';
import { ApiService } from '../api/api.service';
import { Post } from './post';
import { PostDto } from './post-dto';
import { PostMapperService } from './post-mapper.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _postMapperService: PostMapperService,
    private readonly _apiService: ApiService
  ) { }

  getPosts(pageEvent: PageEvent | null): Observable<PageableResource<Post>> {
    return this._http.get<PageableResource<Post>>(
      this._apiService.createApiUrl('posts'), {
      params: pageEvent ? new HttpParams({
        fromObject: { page: pageEvent.pageIndex, size: pageEvent.pageSize }
      }) : undefined
    }).pipe(map((postsResource: PageableResource<PostDto>) => ({
      ...postsResource,
      content: postsResource.content.map((t: PostDto) => this._postMapperService.map(t))
    })));
  }
}
