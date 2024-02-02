package dev.davidsilva.blog.api.exception;

public class PostContentNotFoundException extends RuntimeException {
    public PostContentNotFoundException(Integer post_id, Throwable cause) {
        super("Content of post with id " + post_id + " not found.", cause);
    }
}
