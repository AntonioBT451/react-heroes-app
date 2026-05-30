// src/heroes/actions/get-hero.actions.ts
import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface"

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (heroSlug: string): Promise<Hero> => {

    const { data } = await heroApi.get<Hero>(`/${heroSlug}`);

    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`,
    };
}
