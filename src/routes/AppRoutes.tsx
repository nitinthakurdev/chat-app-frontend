import { RouteObject, useRoutes } from "react-router-dom";
import { FC, lazy, LazyExoticComponent, Suspense} from "react";
import { Login } from "@/constants/Pages.lazy";


const AppPages:LazyExoticComponent<FC> = lazy(()=>import("./AppPages"));


export const AppRoutes = ()=>{
    const routes:RouteObject[] = [
        {
            path:"/login",
            element:<Suspense><Login/></Suspense>
        },
        {
            path:"/",
            element:<Suspense><AppPages/></Suspense>
        },

    ];

    return useRoutes(routes);
};