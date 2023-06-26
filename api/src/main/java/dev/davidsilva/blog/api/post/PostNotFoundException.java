package dev.davidsilva.blog.api.post;

public class PostNotFoundException extends RuntimeException {
    public PostNotFoundException(Long post_id) {
        super("Post with id " + post_id + "was not found.");
    }
}
