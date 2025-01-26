import { IChatUser, ISelectedUsers } from "@/types/Auth.types";
import { FC, lazy, LazyExoticComponent } from "react";

// coponents 
export const Header:LazyExoticComponent<FC> = lazy(()=>import("@components/Header"));
export const Loader:LazyExoticComponent<FC> = lazy(()=>import("@components/Loader"));
export const ChatContainer:LazyExoticComponent<FC<IChatUser>> = lazy(()=>import("@components/ChatContainer"));
export const ChatHeader:LazyExoticComponent<FC<IChatUser>> = lazy(()=>import("@components/ChatHeader"));
export const MessageInput:LazyExoticComponent<FC<IChatUser>> = lazy(()=>import("@components/MessageInput"));
export const NoChatSelected:LazyExoticComponent<FC> = lazy(()=>import("@components/NoChatSelected"));
export const SideBar:LazyExoticComponent<FC<ISelectedUsers>> = lazy(()=>import("@components/SideBar"));
export const AuthImagePattern:LazyExoticComponent<FC<{title:string,subtitle:string}>> = lazy(()=>import("@components/AuthImagePattern"))


// skeletons
export const SideBarSkeletons:LazyExoticComponent<FC> = lazy(()=>import("@components/skeletons/sidebarSkeletons"))
export const MessageSkeletons:LazyExoticComponent<FC> = lazy(()=>import("@components/skeletons/MessageSkeletons"))