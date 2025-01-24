import { FC, lazy, LazyExoticComponent } from "react";


export const PageNotFound:LazyExoticComponent<FC> = lazy(()=>import("@pages/PageNotFound"));

// auth pages
export const Login:LazyExoticComponent<FC> = lazy(()=>import("@pages/auth/Login"));
export const Register:LazyExoticComponent<FC> = lazy(()=>import("@pages/auth/Register"));

// user pages
export const Home:LazyExoticComponent<FC> = lazy(()=>import("@pages/user/Home"));
export const Profile:LazyExoticComponent<FC> = lazy(()=>import("@pages/user/Profile"));
export const Settings:LazyExoticComponent<FC> = lazy(()=>import("@pages/user/Settings"));
