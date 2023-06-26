package dev.davidsilva.blog.api.post;


import dev.davidsilva.blog.dbcore.post.Post;
import dev.davidsilva.blog.dbcore.post.PostDao;
import dev.davidsilva.blog.dbcore.post.PostSpecification;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostDao postDao;

    public Page<Post> findAll(PostSpecification postSpecification, Pageable pageable) {
        return postDao.findAll(postSpecification, pageable);
    }

    public Page<Post> findAll(Pageable pageable) {
        return postDao.findAll(pageable);
    }

    public List<Post> findAll() {
        return postDao.findAll();
    }

    public Post findById(Long id) {
        return postDao.findById(id).orElseThrow(() ->
                new PostNotFoundException(id)
        );
    }
}
