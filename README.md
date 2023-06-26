# Blog application

## TO DO
- JPA pagination: use custom object because default one seems a mess, e.g.:
```json
{
  "content": [{ "id": 1, "title": "..." }],
  "pageable": {
    "sort": { "empty": false, "sorted": true, "unsorted": false },
    "offset": 0,
    "pageSize": 9,
    "pageNumber": 0,
    "paged": true,
    "unpaged": false
  },
  "last": true,
  "totalPages": 1,
  "totalElements": 1,
  "size": 9,
  "number": 0,
  "sort": { "empty": false, "sorted": true, "unsorted": false },
  "first": true,
  "numberOfElements": 1,
  "empty": false
}
```
- JsonView: need to figure out what it does/how it does it. I want to be able to use something as easy as JsonView to
create different "serialized schemas" of an object, but I want it to work with pagination.

## To remember (devops)

- Hardcoded stuff
  - Db credentials are in `docker-compose.yaml`, `config/database.env`, and all the `application.yaml` files.

