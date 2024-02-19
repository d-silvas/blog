import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageableResource } from '../api/api-pageable-resource-request';
import { ApiService } from '../api/api.service';
import { PostMapperService } from './post-mapper.service';
import { PostSummary } from './post-summary';
import { PostSummaryDto } from './post-summary-dto';
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
        {
          params: pageEvent
            ? new HttpParams({
                fromObject: {
                  page: pageEvent.pageIndex,
                  size: pageEvent.pageSize,
                },
              })
            : undefined,
        }
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
}
