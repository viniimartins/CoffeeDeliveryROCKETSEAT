import { StyledCardCatalog, CardBadge, ContainerText, TextCoffee, TypeCoffee, InputPrice, ContainerBuy } from "./style";
import { InputNumber } from "../../Input/InputNumber";
import { ButtonCard } from "../../Buttons/ButtonCard";
import { useCoffee } from "../../../context/Coffee/Coffee";
import { Coffee } from "../../../context/Coffee/types";
import { useCart } from "../../../context/Cart/Cart";
// import { useState } from "react";


export interface CardCatalogProps {
    coffee: Coffee
}


export function CardCatalog({ coffee }: CardCatalogProps) {

    const { increment, decrement } = useCoffee()
    const { addToCart } = useCart()
    // const [ value, setValue] = useState(coffee.)

    function handleAddToCart() {
        addToCart(coffee)

    }

    return (
        <StyledCardCatalog>
            <img src={coffee.image} alt="" />:
            <CardBadge>{coffee.badge}</CardBadge>
            <ContainerText>
                <TypeCoffee>{coffee.type}</TypeCoffee>
                <TextCoffee>{coffee.text}</TextCoffee>
                <ContainerBuy>
                    <InputPrice>
                        <span>R$</span>
                        <p>{coffee.price}</p>
                    </InputPrice>
                    <InputNumber
                        width={4.5}
                        onDecrement={decrement}
                        onIncrement={increment}
                        id={coffee.id}
                        value={coffee.quantity}
                    />
                    <ButtonCard onClick={handleAddToCart} />
                </ContainerBuy>
            </ContainerText>

        </StyledCardCatalog>
    )
}