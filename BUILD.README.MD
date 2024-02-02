- Check here why we have to remove spring-boot-maven-plugin from the library's POM: https://spring.io/guides/gs/multi-module/
- Creating multi-module build as explained in https://spring.io/guides/gs/multi-module/
- Database commands to run inside the Docker container
```
su - postgres
psql
\l
\c blogdb
\d
INSERT INTO posts (id, location, created) VALUES (1, '/posts/01.md', CURRENT_TIMESTAMP);
```
