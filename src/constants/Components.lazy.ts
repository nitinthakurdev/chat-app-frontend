import { FC, lazy, LazyExoticComponent } from "react";


export const Header:LazyExoticComponent<FC> = lazy(()=>import("@components/Header"));