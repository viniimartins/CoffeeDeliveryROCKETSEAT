import { StyledInputNumber, StyledMinus, StyledPlus } from "./style";
import { useState } from "react";

export interface InputProps {
    isOptional?: boolean
    width: number
    height?: number
}



export function InputNumber({ width, height }: InputProps) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <StyledInputNumber
            width={width}
            height={height}
        >
            <StyledMinus size={32} onClick={decrement} />
            {count}
            <StyledPlus size={32} onClick={increment} />
        </StyledInputNumber>
    )
}


