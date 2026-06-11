// src/heroes/actions/search-heroes.action.ts
import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

export interface SearchOptions {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (options: SearchOptions = {}): Promise<Hero[]> => {

    const { name, team, category, universe, status, strength } = options;

    if (Object.keys(options).length === 0) {
        return [];
    }

    const { data } = await heroApi.get<Hero[]>(`/search`, {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strength
        }
    });

    const heroes = data.map((hero) => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`,
    }));

    return heroes;
}

