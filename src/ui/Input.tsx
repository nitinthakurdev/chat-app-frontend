import { IInputProp } from "@/types/ui.type";
import { FC, ReactElement } from "react";


const Input:FC<IInputProp> = ({type,className,placeholder,id,name,value,onChange,onBlur,hidden}):ReactElement => {
    return <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        hidden={hidden}
    />
};

export default Input;