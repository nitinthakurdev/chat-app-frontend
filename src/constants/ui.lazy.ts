import { IInputProp } from "@/types/ui.type";
import { FC, lazy, LazyExoticComponent } from "react";


export const Input:LazyExoticComponent<FC<IInputProp>> = lazy(()=>import("@/ui/Input"));