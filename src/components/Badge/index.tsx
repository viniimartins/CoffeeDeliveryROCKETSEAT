import { BadgeContainer, NumberContainer, NumberText, StyledShoppingCart } from "./style"



interface BadgeProps {
    number: number
}

export function Badge({ number }: BadgeProps) {
    return (
        <BadgeContainer>
            <StyledShoppingCart size={32} />
            {number !== 0 && (
                <NumberContainer>
                    <NumberText>{String(number)}</NumberText>
                </NumberContainer>
            )}
        </BadgeContainer>
    );
}