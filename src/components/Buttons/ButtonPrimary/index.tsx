import { StyledButton } from './style'

interface ButtonProps {
    text: string
    width: number
}

export function ButtonPrimary({ text, width }: ButtonProps) {
    return (
        <StyledButton width={width} >
            {text}
        </StyledButton>
    )
}