package dev.davidsilva.blog.api.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class PaginatedResponse<T> {
    int page;
    int size;
    long totalElements;
    int totalPages;
    boolean isLast;
    private final List<T> content;

    public PaginatedResponse(int page, int size, long totalElements, int totalPages, boolean isLast, List<T> content) {
        this.page = page;
        this.size = size;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
        this.isLast = isLast;
        this.content = content;
    }


    public static <From, To> PaginatedResponse<To> fromPage(Page<From> page, ListMapper<From, To> mapper) {
        return new PaginatedResponse<To>(
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages(),
                page.isLast(),
                mapper.map(page.getContent())
        );
    }
}
