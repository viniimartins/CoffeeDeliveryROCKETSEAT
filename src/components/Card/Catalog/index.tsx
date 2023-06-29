import { StyledCardCatalog, CardBadge, ContainerText, TextCoffee, TypeCoffee, InputPrice, ContainerBuy } from "./style";
import { InputNumber } from "../../Input/InputNumber";
import { ButtonCard } from "../../Buttons/ButtonCard";


export interface CardCatalogProps {
    imageCoffee: string
    badge: string
    type: string
    text: string
    price: number
}


export function CardCatalog({ imageCoffee, badge, type, text, price }: CardCatalogProps) {
    return (
        <StyledCardCatalog>
            <img src={imageCoffee} alt="" />:
            <CardBadge>{badge}</CardBadge>
            <ContainerText>
                <TypeCoffee>{type}</TypeCoffee>
                <TextCoffee>{text}</TextCoffee>
                <ContainerBuy>
                    <InputPrice>
                        <span>R$</span>
                        <p>{price}</p>
                    </InputPrice>
                    <InputNumber width={4.5} />
                    <ButtonCard />
                </ContainerBuy>
            </ContainerText>

        </StyledCardCatalog>
    )
}