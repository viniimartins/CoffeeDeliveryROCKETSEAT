import { StyledButton, StyledShoppingCard } from "./style"

type ButtonCardProps = {
    onClick: () => void
}


export function ButtonCard({ onClick }: ButtonCardProps) {

    return (
        <StyledButton
            onClick={onClick}
        >
            <StyledShoppingCard size={16} />
        </StyledButton>
    )
}