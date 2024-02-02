package dev.davidsilva.blog.api.dto;

import java.util.List;

public interface ListMapper<From, To> {
    List<To> map(List<From> from);
}
