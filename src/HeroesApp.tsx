// HeroesApp.tsx

import { Suspense } from "react"
import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const HeroesApp = () => {
    return (
        <>
            <Suspense fallback={<div>Cargando módulo...</div>}>
                <RouterProvider router={appRouter} />
            </Suspense>
        </>
    )
}
