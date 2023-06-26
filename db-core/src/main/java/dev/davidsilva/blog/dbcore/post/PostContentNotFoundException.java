package dev.davidsilva.blog.dbcore.post;

public class PostContentNotFoundException extends RuntimeException {
    public PostContentNotFoundException(Integer post_id) {
        super("Content of post with id " + post_id + " not found.");
    }

    public PostContentNotFoundException(Integer post_id, Throwable cause) {
        super("Content of post with id " + post_id + " not found.", cause);
    }
}
