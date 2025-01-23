import { RouteObject, useRoutes } from "react-router-dom";
import { FC, lazy, LazyExoticComponent, ReactNode, Suspense } from "react";
// local imports
import { Home, Login, PageNotFound, Profile, Register } from "@/constants/Pages.lazy";


const ProtectedRoute: LazyExoticComponent<FC<{ children: ReactNode }>> = lazy(() => import("./ProtectedRoute"));


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
            element: <Suspense><ProtectedRoute><Home /></ProtectedRoute></Suspense>
        },
        {
            path: "/profile",
            element: <Suspense><ProtectedRoute><Profile /></ProtectedRoute></Suspense>
        },
        {
            path: "/*",
            element: <Suspense><PageNotFound /></Suspense>
        }

    ];

    return useRoutes(routes);
};