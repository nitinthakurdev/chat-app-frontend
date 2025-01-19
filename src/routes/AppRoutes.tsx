import { RouteObject, useRoutes } from "react-router-dom";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";
// local imports
import { Login, PageNotFound, Register } from "@/constants/Pages.lazy";


const AppPages: LazyExoticComponent<FC> = lazy(() => import("./AppPages"));


export const AppRoutes = () => {
    const routes: RouteObject[] = [


        {
            path: "/login",
            element: <Suspense><Login /></Suspense>
        },
        {
            path: "/register",
            element: <Suspense><Register /></Suspense>
        },

        {
            path: "/",
            element: <Suspense><AppPages /></Suspense>
        },
        {
            path: "/*",
            element: <Suspense><PageNotFound /></Suspense>
        }

    ];

    return useRoutes(routes);
};