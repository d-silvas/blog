package dev.davidsilva.blog.api.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.Instant;

@Data
public class PostDto {
    private Integer id;

    // TODO how to automatize these messages ?. In any case, we are not allowing to create new posts for now
    @NotEmpty(message = "'title' is required")
    @Size(min = 2, message = "'title' should have at least 2 characters")
    private String title;

    private Instant created;
    
    @NotEmpty(message = "'content' is required")
    @Size(min = 10, message = "'content' should have at least 10 characters")
    private String content;

    private String summary;
}
