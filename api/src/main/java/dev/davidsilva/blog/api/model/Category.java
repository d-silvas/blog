package dev.davidsilva.blog.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Table(name = "categories")
@Access(AccessType.FIELD)
public class Category {
    @Getter
    @Setter
    @Id
    @Column(name = "name")
    private String name;

    @Getter
    @Setter
    @Column(name = "description")
    private String description;
}
