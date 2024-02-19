package dev.davidsilva.blog.api.controller;

import dev.davidsilva.blog.api.dto.PaginatedResponse;
import dev.davidsilva.blog.api.dto.PostDto;
import dev.davidsilva.blog.api.dto.PostSummaryDto;
import dev.davidsilva.blog.api.service.PostService;
import dev.davidsilva.blog.api.utils.AppConstants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("posts")
@Slf4j
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<PaginatedResponse<PostSummaryDto>> getAllPosts(
            @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE, required = false) int page,
            @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_SIZE, required = false) int size,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_POSTS_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDirection", defaultValue = AppConstants.DEFAULT_POSTS_SORT_DIR, required = false) String sortDirection
    ) {
        return new ResponseEntity<>(postService.getAllPostsSummarized(page, size, sortBy, sortDirection), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok(postService.getPostById(id));
    }
}
