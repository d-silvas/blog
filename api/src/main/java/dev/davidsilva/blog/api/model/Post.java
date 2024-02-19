package dev.davidsilva.blog.api.model;

import dev.davidsilva.blog.api.exception.PostContentNotFoundException;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
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
    @Id
    @Column(name = "id")
    // The db is in charge of auto-incrementing this value. See
    // https://stackoverflow.com/questions/40497768/jpa-and-postgresql-with-generationtype-identity
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @CreationTimestamp
    @Column(name = "created")
    private Instant created;

    @Transient
    private String summary;

    @Transient
    private String content;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }

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
