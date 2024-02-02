package dev.davidsilva.blog.api.service;

import dev.davidsilva.blog.api.dto.ListMapper;
import dev.davidsilva.blog.api.dto.PaginatedResponse;
import dev.davidsilva.blog.api.dto.PostDto;
import dev.davidsilva.blog.api.dto.PostDtoMapper;
import dev.davidsilva.blog.api.exception.ResourceNotFoundException;
import dev.davidsilva.blog.api.model.Post;
import dev.davidsilva.blog.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PostServiceDefault implements PostService {
    private final PostRepository postRepository;

    private final PostDtoMapper postDtoMapper;

    @Autowired
    public PostServiceDefault(PostRepository postRepository, PostDtoMapper postDtoMapper) {
        this.postRepository = postRepository;
        this.postDtoMapper = postDtoMapper;
    }

    @Override
    public PostDto createPost(PostDto postDto) {
        // TODO
        return null;
    }

    @Override
    public PaginatedResponse<PostDto> getAllPosts(int page, int size, String sortBy, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name())
                ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Post> postsPage = postRepository.findAll(pageable);
        ListMapper<Post, PostDto> mapper = (posts) -> posts.stream().map(postDtoMapper::toDto).toList();
        return PaginatedResponse.fromPage(postsPage, mapper);
    }

    @Override
    public PostDto getPostById(Integer id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "Post", "id", id.longValue()
        ));
        return postDtoMapper.toDto(post);
    }

    @Override
    public PostDto updatePost(PostDto postDto, Integer id) {
        // TODO
        return null;
    }

    @Override
    public void deletePostById(Integer id) {
        // TODO
    }
}
