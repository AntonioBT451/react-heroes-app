// src/heroes/types/get-summary.response.ts
import type { Hero } from "./hero.interface"

export interface SummaryResponse {
    totalHeroes: number,
    strongestHero: Hero,
    smartestHero: Hero,
    heroCount: number,
    villainCount: number
}