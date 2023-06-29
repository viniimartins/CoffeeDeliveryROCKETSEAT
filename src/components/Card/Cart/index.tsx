import { StyledCardCart, Image, ContainerBuy } from "./style";
import Trandional from "../../../../public/coffee/Tradicional.png"
import { InputNumber } from "../../Input/InputNumber";
import { ButtonSecondary } from "../../Buttons/ButtonSecondary";

export function CardCart() {
    return (
        <StyledCardCart>
            <Image src={Trandional} alt="" />
            <ContainerBuy>
                <h1>Expresso Tradicional</h1>
                <div>
                    <InputNumber width={4.5} height={2} />
                    <ButtonSecondary text="Remover" />
                </div>
            </ContainerBuy>
            <p>
                R$ 9,90
            </p>
        </StyledCardCart>
    )
}