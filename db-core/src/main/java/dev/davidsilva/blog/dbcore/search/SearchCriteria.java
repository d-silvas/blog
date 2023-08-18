package dev.davidsilva.blog.dbcore.search;

import java.util.ArrayList;
import java.util.List;

public interface SearchCriteria extends List<SearchCriterion> {
    class Builder {
        public static SearchCriteria create() {
            return new SearchCriteriaImpl();
        }

        private static class SearchCriteriaImpl extends ArrayList<SearchCriterion> implements SearchCriteria {
            // TODO here we can implement different stuff like for example AND/OR groupings (now, all items in the ArrayList will be joined by AND)
        }
    }
}
