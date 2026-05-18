// src/heroes/pages/search/ui/SearchControls.tsx

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, SortAsc, Grid, Plus } from 'lucide-react'

export const SearchControls = () => {
    return (
        <>
            {/* Controls */}
            <div className="flex flex-col lg:flex-row gap-2 mb-2">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                        placeholder="Busca heroes, villanos, poderes, teams..."
                        className="pl-12 h-12 text-lg bg-white"
                    />
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                    <Button variant="outline" className="h-12 bg-white gap-2">
                        <Filter className="h-4 w-4" />
                        Filtros
                    </Button>

                    <Button variant="outline" className="h-12 bg-white gap-2">
                        <SortAsc className="h-4 w-4" />
                        Ordenar por nombre
                    </Button>

                    <Button variant="outline" className="h-12 w-12 bg-white">
                        <Grid className="h-4 w-4" />
                    </Button>

                    <Button className="h-12 gap-2 font-bold bg-linear-to-r from-blue-600 to-purple-600">
                        <Plus className="h-6 w-6" />
                        Agregar personaje
                    </Button>
                </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-white rounded-lg px-4 py-2 mb-8 shadow-sm border">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Advanced Filters</h3>
                    <Button variant="ghost">Clear All</Button>
                </div>

                <hr className="mb-4 border-t-2 border-blue-600 rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Team</label>
                        <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            All teams
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            All categories
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Universe</label>
                        <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            All universes
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            All statuses
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <label className="text-sm font-medium whitespace-nowrap">Minimum Strength: 0/10</label>
                    <div className="relative flex flex-1 touch-none select-none items-center">
                        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
                            <div className="absolute h-full bg-primary" style={{ width: "0%" }} />
                        </div>
                        <div className="block h-5 w-5 rounded-full border-2 border-blue-700 bg-linear-to-r from-blue-600 to-purple-600 ring-offset-background transition-colors" />
                    </div>
                </div>
            </div>

            {/* Results info */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <p className="text-gray-600">Showing 6 of 16 characters</p>
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <Filter className="h-3 w-3" />
                        Filtered
                    </Badge>
                </div>
            </div>
        </>
    )
}
