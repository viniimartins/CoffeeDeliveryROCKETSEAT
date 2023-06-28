import { BadgeContainer, NumberContainer, NumberText , StyledShoppingCart} from "./style"


export function Badge() {
    return (
        <BadgeContainer>
            <StyledShoppingCart size={32} />
            <NumberContainer>
                <NumberText>3</NumberText>
            </NumberContainer>
        </BadgeContainer>
    )
}