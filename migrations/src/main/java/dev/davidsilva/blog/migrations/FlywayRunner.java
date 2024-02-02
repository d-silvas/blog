package dev.davidsilva.blog.migrations;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class FlywayRunner implements ApplicationRunner {
    @Autowired
    private Flyway flyway;

    @Override
    public void run(ApplicationArguments args) {
        // Wipe the db first. This removes all data
        flyway.clean();
        flyway.migrate();
    }
}
