import { ChangeEvent, useState } from "react";
import { InputText } from "./style"

interface InputProps {
    isOptional?: boolean
    width: number
    height?: number
}


export function Input({ isOptional, height, width }: InputProps) {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        setValue(event.target.value);
    };


    return (
        <InputText

            type="text"
            value={value}
            onChange={handleChange}
            placeholder={isOptional ? "Optional" : "Optional2"}
            width={width}
            height={height}
        />
    )
}