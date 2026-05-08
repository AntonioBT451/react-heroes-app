// src/router/app.router.tsx

import { createBrowserRouter } from "react-router";

import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/hero/1',
        element: <HomePage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/admin',
        element: <AdminPage />
    },
])
