package dev.davidsilva.blog.api.repository;

import dev.davidsilva.blog.api.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
