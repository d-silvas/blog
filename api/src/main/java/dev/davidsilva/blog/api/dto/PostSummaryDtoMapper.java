package dev.davidsilva.blog.api.dto;

import dev.davidsilva.blog.api.model.Post;
import org.springframework.stereotype.Component;

@Component
public class PostSummaryDtoMapper implements DtoMapper<PostSummaryDto, Post> {
    public PostSummaryDto toDto(Post post) {
        PostSummaryDto postDto = new PostSummaryDto();
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setCreated(post.getCreated());
        postDto.setSummary(post.getSummary());
        return postDto;
    }

    public Post toEntity(PostSummaryDto postDto) {
        // TODO
        return null;
    }
}
