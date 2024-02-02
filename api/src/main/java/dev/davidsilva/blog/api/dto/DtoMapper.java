package dev.davidsilva.blog.api.dto;

public interface DtoMapper<DtoType, EntityType> {
    EntityType toEntity(DtoType dto);

    DtoType toDto(EntityType entity);
}
