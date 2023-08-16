import { ForwardedRef, forwardRef } from "react";
import { StyledInputText } from "./style"

interface InputProps {
    isOptional?: boolean
    width: number
    height?: number
    placeholder: string
    type : string
}


export const InputText = forwardRef(({ isOptional, height, width, placeholder, type , ...rest }: InputProps, myRef: ForwardedRef<HTMLInputElement>) => {

    return (
        <StyledInputText
            ref={myRef}
            type={type}
            placeholder={isOptional ? `${placeholder} - Opcional` : placeholder}
            width={width}
            height={height}
            {...rest}
        />
    )
}
)