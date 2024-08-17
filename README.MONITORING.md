Checked the following
- https://mxulises.medium.com/simple-prometheus-setup-on-docker-compose-f702d5f98579
- https://www.baeldung.com/ops/docker-compose-links-depends-on
- https://github.com/rnaveiras/prometheus-mysql/blob/master/docker-compose.yml
- https://selftuts.in/mysql-monitoring-using-prometheus/

## Grafana - MySQL
- https://grafana.com/blog/2023/07/07/how-to-visualize-time-series-from-sql-databases-with-grafana/
- https://grafana.com/docs/grafana/latest/datasources/mysql/?pg=blog&plcmt=body-txt#macros

### Queries
- Number of posts over time
```sql
SELECT created, (SELECT COUNT(*) FROM blog.posts p1 WHERE p1.created <= p2.created) as num_posts FROM blog.posts p2 GROUP BY created;
```