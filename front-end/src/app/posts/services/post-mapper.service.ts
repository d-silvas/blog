import { Injectable } from '@angular/core';

import type { Post, PostDto } from '../models';

@Injectable({ providedIn: 'root' })
export class PostMapperService {
  map(postDto: PostDto): Post {
    return {
      id: postDto.id,
      created: postDto.created,
      title: postDto.title,
      content: postDto.content,
    };
  }
}
