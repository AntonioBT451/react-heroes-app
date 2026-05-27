// src/heroes/pages/home/HomePage.tsx
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Heart } from "lucide-react"

import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { CustomPagination } from "@/components/custom/CustomPagination";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];

        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });

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
                            All Characters (16)
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
                            Heroes (12)
                        </TabsTrigger>

                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}
                        >
                            Villains (2)
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
                <CustomPagination totalPages={4} />
            </>
        </>
    )
}
