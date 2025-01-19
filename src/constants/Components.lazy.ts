import { FC, lazy, LazyExoticComponent } from "react";

// coponents 
export const Header:LazyExoticComponent<FC> = lazy(()=>import("@components/Header"));
export const Loader:LazyExoticComponent<FC> = lazy(()=>import("@components/Loader"));
export const AuthImagePattern:LazyExoticComponent<FC<{title:string,subtitle:string}>> = lazy(()=>import("@components/AuthImagePattern"))