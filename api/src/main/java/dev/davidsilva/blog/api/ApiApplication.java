package dev.davidsilva.blog.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@EnableJpaRepositories(basePackages = {"dev.davidsilva.blog.dbcore"})
//@EntityScan(basePackages = {"dev.davidsilva.blog.dbcore"})
//@SpringBootApplication(scanBasePackages = {"dev.davidsilva.blog.api", "dev.davidsilva.blog.dbcore"})
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

}
