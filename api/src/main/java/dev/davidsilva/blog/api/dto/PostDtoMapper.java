package dev.davidsilva.blog.api.dto;

import dev.davidsilva.blog.api.model.Post;
import org.springframework.stereotype.Component;

@Component
public class PostDtoMapper implements DtoMapper<PostDto, Post> {
    public PostDto toDto(Post post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setCreated(post.getCreated());
        postDto.setContent(post.getContent());
        postDto.setSummary(post.getSummary());
        postDto.setCategory(post.getCategory().getName());
        return postDto;
    }

    public Post toEntity(PostDto postDto) {
        // TODO
        return null;
    }
}
