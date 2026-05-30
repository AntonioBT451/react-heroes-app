// src/heroes/hooks/useHeroData.ts
import { useQuery } from '@tanstack/react-query';

import { getHeroAction } from '../actions/get-hero.action';

export const useHeroData = (slug: string) => {

    return useQuery({
        queryKey: ['heroData', slug],
        queryFn: () => getHeroAction(slug),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });
}
