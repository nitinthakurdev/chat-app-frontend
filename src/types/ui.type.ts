import { ChangeEvent, FocusEvent } from "react";


export interface IInputProp {
    type:string;
    className:string;
    placeholder?:string;
    id?:string;
    name:string;
    value?:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    onBlur?:(e:FocusEvent<HTMLInputElement>)=>void;
    hidden?:boolean;
}