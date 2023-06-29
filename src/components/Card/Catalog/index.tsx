import { StyledCardCatalog, Image, CardBadge, ContainerText, TextCoffee, TypeCoffee, InputPrice, ContainerBuy } from "./style";
import Trandional from "../../../../public/coffee/Tradicional.png"
import { InputNumber } from "../../Input/InputNumber";
import { ButtonCard } from "../../Buttons/ButtonCard";


export function CardCatalog() {
    return (
        <StyledCardCatalog>
            <Image src={Trandional} alt="" />
            <CardBadge>Tradicional</CardBadge>
            <ContainerText>
                <TypeCoffee>Expresso Tradicional</TypeCoffee>
                <TextCoffee>O tradicional café feito com água quente e grãos moídos</TextCoffee>
                <ContainerBuy>
                    <InputPrice>
                        <span>R$</span>
                        <p>9,90</p>
                    </InputPrice>
                    <InputNumber width={4.5} />
                    <ButtonCard />
                </ContainerBuy>
            </ContainerText>

        </StyledCardCatalog>
    )
}