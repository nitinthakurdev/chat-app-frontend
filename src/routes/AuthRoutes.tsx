import { RouteObject, useRoutes } from "react-router-dom";
import { Suspense } from "react";
// local imports
import { Login, Register } from "@/constants/Pages.lazy";




export const AuthRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "/login",
            element: <Suspense><Login /></Suspense>
        },
        {
            path: "/register",
            element: <Suspense><Register /></Suspense>
        },

    ];

    return useRoutes(routes);
};