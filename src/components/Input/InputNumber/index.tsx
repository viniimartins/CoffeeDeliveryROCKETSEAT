import { StyledInputNumber, StyledMinus, StyledPlus } from "./style";

export interface InputProps {
    isOptional?: boolean
    width: number
    height?: number
    value: number
    id: number
    onIncrement: (id: number) => void
    onDecrement: (id: number) => void
}


export function InputNumber({ width, height, value, onDecrement, onIncrement, id }: InputProps) {

    return (
        <StyledInputNumber
            width={width}
            height={height}
        >
            <StyledMinus size={32} onClick={() => onDecrement(id)} />
            {value}
            <StyledPlus size={32} onClick={() => onIncrement(id)} />
        </StyledInputNumber>
    )
}


