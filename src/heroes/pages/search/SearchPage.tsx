// src/heroes/pages/search/SearchPage.tsx
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { HeroGrid } from '../../components/HeroGrid';
import { useSearchParams } from "react-router";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";
import { ResultCount } from "./ui/ResultCount";

export const SearchPage = () => {

    const [searchHeroesParams] = useSearchParams();

    const name = searchHeroesParams.get('name') ?? undefined;
    const strength = searchHeroesParams.get('strength') ?? undefined;

    const { data: heroes, isLoading } = useSearchHeroes({
        name,
        strength,
    });

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
        <>
            {/* Header */}
            <CustomJumbotron
                title={"Búsqueda de Superheroes"}
                description={"Descubre superheroes y villanos."}
            />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Search Controls and Advanced Filters*/}
            <SearchControls />

            {/* Results info */}
            <ResultCount count={heroes?.length ?? 0} />

            <HeroGrid heroes={heroes ?? []} />
        </>
    )
}
