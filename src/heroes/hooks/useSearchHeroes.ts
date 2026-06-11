// src/heroes/hooks/useHeroesSearch.ts
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction, type SearchOptions } from "../actions/search-heroes.action";

export const useSearchHeroes = (searchOptions: SearchOptions) => {
    return useQuery({
        queryKey: ['search', searchOptions],
        queryFn: () => searchHeroesAction(searchOptions),
        staleTime: 1000 * 60 * 5,
    });
}
