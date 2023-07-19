import { StyledCardCart, Image, ContainerBuy } from "./style";
import Trandional from "../../../assets/coffee/Tradicional.png"
import { InputNumber } from "../../Input/InputNumber";
import { ButtonSecondary } from "../../Buttons/ButtonSecondary";
import { Coffee } from "../../../context/Coffee/types";
import { useCart } from "../../../context/Cart/Cart";

interface CardCartProps {
    coffee: Coffee
}


export function CardCart({ coffee }: CardCartProps) {
    const { increment, decrement } = useCart()
    const { removeToCart } = useCart()



    return (
        <StyledCardCart>
            <Image src={Trandional} alt="" />
            <ContainerBuy>
                <h1>{coffee.type}</h1>
                <div>
                    <InputNumber width={4.5} height={2} onDecrement={decrement} onIncrement={increment} id={coffee.id} value={coffee.quantity} />
                    <ButtonSecondary
                        text="Remover"
                        onClick={() => removeToCart(coffee)}
                    />
                </div>
            </ContainerBuy>
            <span>R$</span>
            <p>{coffee.price}</p>
        </StyledCardCart>
    )
}