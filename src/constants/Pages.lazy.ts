import { FC, lazy, LazyExoticComponent } from "react";

// auth pages

export const Login:LazyExoticComponent<FC> = lazy(()=>import("@pages/auth/Login"));