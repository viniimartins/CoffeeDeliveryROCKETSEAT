import { StyledButton, StyledTrashIcon } from './style'

interface ButtonProps {
    text: string
    onClick: () => void
}

export function ButtonSecondary({ text, onClick }: ButtonProps) {
    return (
        <StyledButton
            type='button'
            onClick={onClick}
        >
            <StyledTrashIcon size={16} />
            {text}
        </StyledButton>
    )
}
