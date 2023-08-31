package dev.davidsilva.blog.dbcore.search;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.repository.query.QueryUtils.toOrders;

/**
 * DOCS:
 * https://docs.oracle.com/javaee/6/tutorial/doc/gjrij.html
 * https://www.objectdb.com/java/jpa/query/criteria
 */
public abstract class AbstractSearchableJpaRepository<T> extends AbstractDomainClassAwareRepository<T> implements SearchableRepository<T> {
    @PersistenceContext
    protected EntityManager entityManager;

    private static Predicate[] toPredicates(SearchCriteria criteria, Root<?> root, CriteriaBuilder builder) {
        Predicate[] predicates = new Predicate[criteria.size()];
        int i = 0;
        for (SearchCriterion c : criteria) {
            predicates[i] = c.getOperator().toPredicate(c, root, builder);
            i += 1;
        }
        return predicates;
    }

    @Override
    public Page<T> search(SearchCriteria criteria, Pageable pageable) {
        CriteriaBuilder builder = this.entityManager.getCriteriaBuilder();

        CriteriaQuery<Long> countCriteria = builder.createQuery(Long.class);
        Root<T> countRoot = countCriteria.from(this.domainClass);
        long total = this.entityManager.createQuery(
                countCriteria.select(builder.count(countRoot))
                        .where(toPredicates(criteria, countRoot, builder))
        ).getSingleResult();

        CriteriaQuery<T> pageCriteria = builder.createQuery(this.domainClass);
        Root<T> pageRoot = pageCriteria.from(this.domainClass);
        List<T> list = this.entityManager.createQuery(
                        pageCriteria.select(pageRoot)
                                .where(toPredicates(criteria, pageRoot, builder))
                                .orderBy(toOrders(pageable.getSort(), pageRoot, builder))
                ).setFirstResult((int) pageable.getOffset())
                .setMaxResults(pageable.getPageSize())
                .getResultList();
        // From book: "Remember that the list returned by the JPA provider may be lazy-loaded and thus
        // won’t populate until iterated. This is why the code wraps the list in a new ArrayList"
        return new PageImpl<>(new ArrayList<>(list), pageable, total);
    }
}
