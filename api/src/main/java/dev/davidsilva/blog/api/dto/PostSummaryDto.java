package dev.davidsilva.blog.api.dto;

import lombok.Data;

import java.time.Instant;

@Data
public class PostSummaryDto {
    private Integer id;

    private String title;

    private Instant created;
    
    private String summary;
}
