import { FC, lazy, LazyExoticComponent } from "react";

// coponents 
export const Header:LazyExoticComponent<FC> = lazy(()=>import("@components/Header"));
export const Loader:LazyExoticComponent<FC> = lazy(()=>import("@components/Loader"));
export const ChatContainer:LazyExoticComponent<FC> = lazy(()=>import("@components/ChatContainer"));
export const NoChatSelected:LazyExoticComponent<FC> = lazy(()=>import("@components/NoChatSelected"));
export const SideBar:LazyExoticComponent<FC> = lazy(()=>import("@components/SideBar"));
export const AuthImagePattern:LazyExoticComponent<FC<{title:string,subtitle:string}>> = lazy(()=>import("@components/AuthImagePattern"))