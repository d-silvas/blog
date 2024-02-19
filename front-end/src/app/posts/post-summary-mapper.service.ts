import { Injectable } from '@angular/core';

import { PostSummaryDto } from './post-summary-dto';
import { PostSummary } from './post-summary';

@Injectable({ providedIn: 'root' })
export class PostSummaryMapperService {
  map(postSummaryDto: PostSummaryDto): PostSummary {
    return {
      id: postSummaryDto.id,
      created: postSummaryDto.created,
      title: postSummaryDto.title,
      summary: postSummaryDto.summary,
    };
  }
}
