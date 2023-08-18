package dev.davidsilva.blog.dbcore.post;

import dev.davidsilva.blog.dbcore.search.SearchableRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDao extends JpaRepository<Post, Integer>, JpaSpecificationExecutor<Post>, SearchableRepository<Post> {
}
