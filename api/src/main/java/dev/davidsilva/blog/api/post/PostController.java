package dev.davidsilva.blog.api.post;


import dev.davidsilva.blog.dbcore.post.Post;
import dev.davidsilva.blog.dbcore.post.PostSpecification;
import dev.davidsilva.blog.dbcore.search.SearchCriteria;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Controller
@RequestMapping("posts")
@AllArgsConstructor
@Slf4j
public class PostController {
    private final PostService postService;

    @GetMapping
    // TODO ??? https://stackoverflow.com/questions/31913410/spring-data-pagination-returns-no-results-with-jsonview
//    @JsonView(PostViews.List.class)
    public ResponseEntity<Page<Post>> getPosts(
            @PageableDefault(page = 0, size = Integer.MAX_VALUE)
            @SortDefault.SortDefaults({
                    @SortDefault(sort = "created", direction = Sort.Direction.DESC)
            })
            Pageable pageable,
            @RequestParam(value = "search", required = false) String search
    ) {
        Page<Post> paginatedPosts;
        if (search == null) {
            paginatedPosts = postService.findAll(pageable);
        } else {
            Pattern pattern = Pattern.compile("(\\w+)(:)(\\w+)");
            Matcher matcher = pattern.matcher(search);
            matcher.find();
            SearchCriteria searchCriteria = new SearchCriteria(matcher.group(1), matcher.group(2), matcher.group(3));
            PostSpecification postSpecification = new PostSpecification(searchCriteria);
            paginatedPosts = postService.findAll(postSpecification, pageable);
        }
        return new ResponseEntity<>(paginatedPosts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    //@JsonView(PostViews.Single.class)
    public ResponseEntity<Post> getPostById(@PathVariable("id") Integer id) {
        Post post = postService.findById(id);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }
}

