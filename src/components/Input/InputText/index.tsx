import { ChangeEvent, useState } from "react";
import { StyledInputText } from "./style"

interface InputProps {
    isOptional?: boolean
    width: number
    height?: number
}


export function InputText({ isOptional, height, width }: InputProps) {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    return (
        <StyledInputText
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={isOptional ? "Optional" : "Optional2"}
            width={width}
            height={height}
        />
    )
}