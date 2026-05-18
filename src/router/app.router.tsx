// src/router/app.router.tsx

import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

// Importación Estática (Carga inmediata)
// import { AdminPage } from "@/admin/pages/AdminPage";

// Importación Dinámica (Carga perezosa)
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'hero/1',
                element: <HomePage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage /> // Este componente solo se descarga si se ingresa a /admin
            },
        ]
    }
])
