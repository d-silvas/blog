package dev.davidsilva.blog.dbcore.search;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import java.util.Collection;

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
            @SuppressWarnings("unchecked")
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.lessThan(r.get(c.getPropertyName()), (Comparable<Object>) Operator.getComparable(c));
            }
        },
        LTE {
            @Override
            @SuppressWarnings("unchecked")
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.lessThanOrEqualTo(r.get(c.getPropertyName()), (Comparable<Object>) Operator.getComparable(c));
            }
        },
        GT {
            @Override
            @SuppressWarnings("unchecked")
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.greaterThan(r.get(c.getPropertyName()), (Comparable<Object>) Operator.getComparable(c));
            }
        },
        GTE {
            @Override
            @SuppressWarnings("unchecked")
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.greaterThanOrEqualTo(
                        r.get(c.getPropertyName()), (Comparable<Object>) Operator.getComparable(c)
                );
            }
        },
        LIKE {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.like(
                        r.get(c.getPropertyName()), getString(c)
                );
            }
        },
        NOT_LIKE {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return b.notLike(
                        r.get(c.getPropertyName()), getString(c)
                );
            }
        },
        IN {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                Object o = c.getCompareTo();
                if (o == null)
                    return r.get(c.getPropertyName()).in();
                if (o instanceof Collection)
                    return r.get(c.getPropertyName()).in((Collection<?>) o);
                throw new IllegalArgumentException(c.getPropertyName());
            }
        },
        NOT_IN {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                Object o = c.getCompareTo();
                if (o == null)
                    return b.not(r.get(c.getPropertyName()).in());
                if (o instanceof Collection)
                    return b.not(r.get(c.getPropertyName()).in((Collection<?>) o));
                throw new IllegalArgumentException(c.getPropertyName());
            }
        },
        NULL {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return r.get(c.getPropertyName()).isNull();
            }
        },
        NOT_NULL {
            @Override
            public Predicate toPredicate(SearchCriterion c, Root<?> r, CriteriaBuilder b) {
                return r.get(c.getPropertyName()).isNotNull();
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
