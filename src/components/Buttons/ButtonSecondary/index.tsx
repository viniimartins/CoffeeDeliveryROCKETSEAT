import { StyledButton, StyledTrashIcon } from './style'

interface ButtonProps {
    text: string
}

export function ButtonSecondary({ text }: ButtonProps) {
    return (
        <StyledButton >
                <StyledTrashIcon  size={16} /> 
                {text}
        </StyledButton>
    )
}