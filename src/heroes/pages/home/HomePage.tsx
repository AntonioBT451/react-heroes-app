// src/heroes/pages/home/HomePage.tsx
import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { Heart } from "lucide-react"

import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { CustomPagination } from "@/components/custom/CustomPagination";
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];

        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResponse } = usePaginatedHero(Number(page), Number(limit));

    const { data: summary } = useHeroSummary();

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title={"Universo de Superheroes"}
                    description={"Descubre, explora y administra tus superheroes y villanos favoritos."}
                />

                <CustomBreadcrumbs currentPage={"Super Héroes"} breadcrumbs={[
                    // {
                    //     label: "Page01",
                    //     to: "/"
                    // },
                    // {
                    //     label: "Page02",
                    //     to: "/"
                    // },
                ]} />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'all');
                                return prev;
                            })}
                        >
                            All Characters ({summary?.totalHeroes})
                        </TabsTrigger>

                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev;
                            })}
                        >
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>

                        <TabsTrigger value="heroes"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                return prev;
                            })}
                        >
                            Heroes ({summary?.heroCount})
                        </TabsTrigger>

                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}
                        >
                            Villains ({summary?.villainCount})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={"all"}>
                        {/* Mostrar todos los personajes */}
                        <h1>Todos los personajes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>

                    <TabsContent value={"favorites"}>
                        {/* Mostrar todos los personajes favoritos*/}
                        <h1>Favoritos</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>

                    <TabsContent value={"heroes"}>
                        {/* Mostrar todos los heroes */}
                        <h1>Heroes</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>

                    <TabsContent value={"villains"}>
                        {/* Mostrar todos los villanos */}
                        <h1>Villanos</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            </>
        </>
    )
}
