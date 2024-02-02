import { Injectable } from '@angular/core';

import { Post } from './post';
import { PostDto } from './post-dto';

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
