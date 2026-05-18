// src/heroes/pages/search/SearchPage.tsx

import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

export const SearchPage = () => {
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
        </>
    )
}
