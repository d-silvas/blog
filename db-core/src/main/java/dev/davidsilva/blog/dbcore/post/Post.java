package dev.davidsilva.blog.dbcore.post;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.Charset;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(
        name = "posts",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"location"})
        }
)
public class Post {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @CreationTimestamp
    @Column(name = "created")
    private Instant created;

    @Column(name = "summary")
    @Transient
    private String summary;


    @Transient
    private String content;

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

    public int read(Reader reader, char[] chars) throws IOException {
        return reader.read(chars);
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
