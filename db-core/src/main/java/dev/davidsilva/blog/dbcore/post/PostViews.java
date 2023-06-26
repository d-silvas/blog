package dev.davidsilva.blog.dbcore.post;

public class PostViews {
    public interface List extends Post.Views.Id, Post.Views.Title, Post.Views.Created, Post.Views.Summary {
    }

    public interface Single extends Post.Views.Id, Post.Views.Title, Post.Views.Created, Post.Views.Content {
    }
}
