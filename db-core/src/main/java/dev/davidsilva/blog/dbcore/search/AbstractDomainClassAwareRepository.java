package dev.davidsilva.blog.dbcore.search;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * See book, page 614+
 */
abstract class AbstractDomainClassAwareRepository<T> {
    protected final Class<T> domainClass;

    protected AbstractDomainClassAwareRepository() {
        Type genericSuperclass = this.getClass().getGenericSuperclass();
        while (!(genericSuperclass instanceof ParameterizedType type)) {
            if (!(genericSuperclass instanceof Class))
                throw new IllegalStateException("Unable to determine type " +
                        "arguments because generic superclass neither " +
                        "parameterized type nor class.");
            if (genericSuperclass == AbstractSearchableJpaRepository.class)
                throw new IllegalStateException("Unable to determine type " +
                        "arguments because no parameterized generic superclass " +
                        "found.");

            genericSuperclass = ((Class) genericSuperclass).getGenericSuperclass();
        }

        Type[] arguments = type.getActualTypeArguments();
        this.domainClass = (Class<T>) arguments[0];
    }
}