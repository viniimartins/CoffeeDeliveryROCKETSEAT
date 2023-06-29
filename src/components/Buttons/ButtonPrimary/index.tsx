import { StyledButton } from './style'

interface ButtonProps {
    text: string
    width?: number
}

export function ButtonPrimary({ text }: ButtonProps) {
    return (
        <StyledButton >
            {text}
        </StyledButton>
    )
}