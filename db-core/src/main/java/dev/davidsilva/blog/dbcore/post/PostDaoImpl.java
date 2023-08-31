package dev.davidsilva.blog.dbcore.post;

import dev.davidsilva.blog.dbcore.search.AbstractSearchableJpaRepository;

/**
 * IMPORTANT NOTE: this class is automatically picked up as the implementation of PostDao. See Example 1.12 of
 * https://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html
 */
public class PostDaoImpl extends AbstractSearchableJpaRepository<Post> {
}
