import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly _url = environment.apiUrl;

  createApiUrl(resource: string): string {
    const resourceWithoutFrontSlashes = resource.replace(/^\/\/*/, '');
    return `${this._url}/${resourceWithoutFrontSlashes}`;
  }

  createPaginationHttpParams(
    pageEvent: PageEvent | null
  ): HttpParams | undefined {
    return pageEvent
      ? new HttpParams({
          fromObject: {
            page: pageEvent.pageIndex,
            size: pageEvent.pageSize,
          },
        })
      : undefined;
  }
}
