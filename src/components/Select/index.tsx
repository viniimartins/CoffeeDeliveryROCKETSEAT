import { useState } from "react";
import { Button, ButtonGroup, StyledCreditCard } from "./style";




export function Select() {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };

    return (
            <ButtonGroup>
            <Button
                selected={selectedButton === 1}
                onClick={() => handleButtonClick(1)}
            >
                <StyledCreditCard size={32} />
                Cartão de crédito
            </Button>
            <Button
                selected={selectedButton === 2}
                onClick={() => handleButtonClick(2)}
            >
                <StyledCreditCard size={32} />
                Cartão de crédito
            </Button>
            <Button
                selected={selectedButton === 3}
                onClick={() => handleButtonClick(3)}
            >
                <StyledCreditCard size={32} />
                Cartão de crédito
            </Button>
        </ButtonGroup>
    );
}