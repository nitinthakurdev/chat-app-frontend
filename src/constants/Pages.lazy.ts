import { FC, lazy, LazyExoticComponent } from "react";


export const PageNotFound:LazyExoticComponent<FC> = lazy(()=>import("@pages/PageNotFound"));

// auth pages
export const Login:LazyExoticComponent<FC> = lazy(()=>import("@pages/auth/Login"));
export const Register:LazyExoticComponent<FC> = lazy(()=>import("@pages/auth/Register"));