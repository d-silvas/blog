package dev.davidsilva.blog.dbcore;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

// See https://stackoverflow.com/a/76186016/10997015
//@EnableAutoConfiguration
//@ComponentScan
//@EnableJpaRepositories
/////
@AutoConfiguration
@ComponentScan(basePackages = {"dev.davidsilva.blog.dbcore"})
@EntityScan(basePackages = {"dev.davidsilva.blog.dbcore"})
@EnableJpaRepositories(basePackages = {"dev.davidsilva.blog.dbcore"})
public class AutoConfigure {
}