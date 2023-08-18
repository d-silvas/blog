package dev.davidsilva.blog.dbcore.post;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.charset.Charset;
import java.time.Instant;

@Entity
@Table(name = "posts", schema = "public")
@Access(AccessType.FIELD)
public class Post implements Serializable {
    @Id
    @Column(name = "id")
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
        return this.id;
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

    public String getContent() {
        try {
            return StreamUtils.copyToString(getFileInputStream(), Charset.defaultCharset());
        } catch (IOException e) {
            throw new PostContentNotFoundException(this.getId(), e);
        }
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

    private InputStream getFileInputStream() throws IOException {
        return new ClassPathResource(this.getLocation()).getInputStream();
    }

    public interface Views {
        interface Id {
        }

        interface Title {
        }

        interface Location {
        }

        interface Created {
        }

        interface Summary {
        }

        interface Content {
        }
    }

    // TODO user
    // TODO modified
    // TODO slug
}
