package dev.davidsilva.blog.dbmigrations;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class FlywayConfiguration {
    @Autowired
    private DataSource dataSource;

    @Bean
    public Flyway flyway() {
        return Flyway
                .configure()
                .dataSource(dataSource)
                .locations("db/migration")
                .table("migrations")
                .cleanDisabled(false)
                .load();
    }
}
