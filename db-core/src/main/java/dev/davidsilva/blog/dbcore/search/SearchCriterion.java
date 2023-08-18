package dev.davidsilva.blog.dbcore.search;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class SearchCriterion {
    private final String propertyName;
    private final Operator operator;
    private final Object compareTo;

    public SearchCriterion(String propertyName, Operator operator, Object compareTo) {
        this.propertyName = propertyName;
        this.operator = operator;
        this.compareTo = compareTo;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public Operator getOperator() {
        return operator;
    }

    public Object getCompareTo() {
        return compareTo;
    }


    public enum Operator {
        EQ {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.equal(r.get(c.getPropertyName()), c.getCompareTo());
            }
        },
        NEQ {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.notEqual(r.get(c.getPropertyName()), c.getCompareTo());
            }
        },
        LT {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.lessThan(r.<Comparable>get(c.getPropertyName()), Operator.getComparable(c));
            }
        };

        private static Comparable<?> getComparable(SearchCriterion c) {
            Object o = c.getCompareTo();
            if (o != null && !(o instanceof Comparable))
                throw new IllegalArgumentException(c.getPropertyName());
            return (Comparable<?>) o;
        }

        private static String getString(SearchCriterion c) {
            if (!(c.getCompareTo() instanceof String))
                throw new IllegalArgumentException(c.getPropertyName());
            return (String) c.getCompareTo();
        }

        public abstract Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b);
    }
}
