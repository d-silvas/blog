package dev.davidsilva.blog.api.service;

import dev.davidsilva.blog.api.dto.PaginatedResponse;
import dev.davidsilva.blog.api.dto.PostDto;

public interface PostService {
    PostDto createPost(PostDto postDto);

    PaginatedResponse<PostDto> getAllPosts(int page, int size, String sortBy, String sortDir);

    PostDto getPostById(Integer id);

    PostDto updatePost(PostDto postDto, Integer id);

    void deletePostById(Integer id);
}
