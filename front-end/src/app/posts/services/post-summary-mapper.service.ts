import { Injectable } from '@angular/core';

import type { PostSummary, PostSummaryDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PostSummaryMapperService {
  map(postSummaryDto: PostSummaryDto): PostSummary {
    return {
      id: postSummaryDto.id,
      created: postSummaryDto.created,
      title: postSummaryDto.title,
      summary: postSummaryDto.summary + '&hellip;',
    };
  }
}
