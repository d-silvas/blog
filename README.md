# Blog application

## Learnings - Professional Java for Web Applications

- [p569] `uniqueConstraints` and `indexes` are only used when schema generation is
  enabled. We should NOT specify them if schema generation is disabled (the default).
- [p569] Schema generation is "dangerous" so we should always do it manually.
- [p569] As per the book, `@Access(AccessType.PROPERTY)` is better than `FIELD`. As per
  https://www.java4coding.com/contents/jpa/jpa-access-annotation, Access is taken from
  wherever you put the `@Id`. To stick to the book's recommendation, I'll be adding
  JPA annotations to getters/setters instead of to properties.
- Plot twist!! Going back to `FIELD` because otherwise Jackson will try to serialize
  `getFileInputStream`.

## TO DO

- JPA pagination: use custom object because default one seems a mess, e.g.:

```json
{
  "content": [
    {
      "id": 1,
      "title": "..."
    }
  ],
  "pageable": {
    "sort": {
      "empty": false,
      "sorted": true,
      "unsorted": false
    },
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
  "sort": {
    "empty": false,
    "sorted": true,
    "unsorted": false
  },
  "first": true,
  "numberOfElements": 1,
  "empty": false
}
```

- Maybe I don't want to use a custom object for pagination, but serialize `Page` at will (see next point). It is quite
  convenient that we can just make `PostDao` extend `JpaSpecificationExecutor` and Srping does everything for you.
- JsonView: need to figure out what it does/how it does it. I want to be able to use something as easy as JsonView to
  create different "serialized schemas" of an object, but I want it to work with pagination.

## To remember (devops)

- Hardcoded stuff
  - Db credentials are in `docker-compose.yaml`, and all the `application.yaml` files.

## TODO !!

- Use a document data base for storing logs ??? (Seen in Professional Java book). MongoDB ???
