package dev.davidsilva.blog.dbcore.post;

import dev.davidsilva.blog.dbcore.search.SearchCriterion;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

@AllArgsConstructor
public class PostSpecification implements Specification<Post> {
    private final SearchCriterion searchCriterion;

    @Override
    public Predicate toPredicate(Root<Post> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        // More here https://www.baeldung.com/rest-api-search-language-spring-data-specifications
//        if (searchCriterion.getOperator().equalsIgnoreCase(":")) {
//            return builder.like(
//                    root.get(searchCriterion.getPropertyName()),
//                    "%" + searchCriterion.getCompareTo() + "%"
//            );
//        }
        return null;
    }
}
