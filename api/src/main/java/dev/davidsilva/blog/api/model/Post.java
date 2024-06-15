package dev.davidsilva.blog.api.model;

import dev.davidsilva.blog.api.exception.PostContentNotFoundException;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.time.Instant;

@NoArgsConstructor
@Entity
@Table(name = "posts", uniqueConstraints = {@UniqueConstraint(columnNames = {"title"})})
@Access(AccessType.FIELD)
public class Post {
    @Getter
    @Setter
    @Id
    @Column(name = "id")
    // The db is in charge of auto-incrementing this value. See
    // https://stackoverflow.com/questions/40497768/jpa-and-postgresql-with-generationtype-identity
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Getter
    @Setter
    @Column(name = "title")
    private String title;

    @Getter
    @Setter
    @Column(name = "location")
    private String location;

    @Getter
    @Setter
    @CreationTimestamp
    @Column(name = "created")
    private Instant created;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "category_name", referencedColumnName = "name")
    private Category category;

    @Transient
    private String summary;

    @Transient
    private String content;

    /**
     * TODO this can possibly be done in a better way by reading the first chars only of the file
     *
     * @return A summary of the post
     */
    public String getSummary() {
        int maxChars = 500;
        String content = getContent();
        return content.substring(0, Math.min(maxChars, content.length()));
    }

    public String getContent() {
        try {
            return StreamUtils.copyToString(getFileInputStream(), Charset.defaultCharset());
        } catch (IOException e) {
            throw new PostContentNotFoundException(getId(), e);
        }
    }

    private InputStream getFileInputStream() throws IOException {
        return new ClassPathResource(this.getLocation()).getInputStream();
    }
}
