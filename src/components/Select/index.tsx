import { Button, ButtonGroup, StyledBank, StyledCreditCard, StyledMoney } from "./style";


type SelectProps = {
    onSelect: (value: string) => void
    value: string

}


export function Select({ onSelect, value }: SelectProps) {

    const handleButtonClick = (value: string) => {
        onSelect(value);
    };

    return (
        <ButtonGroup>
            <Button
                type="button"
                selected={value === 'Cartão de crédito'}
                onClick={() => handleButtonClick('Cartão de crédito')}
            >
                <StyledCreditCard size={32} />
                Cartão de crédito
            </Button>
            <Button
                type="button"
                selected={value === 'Cartão de débito'}
                onClick={() => handleButtonClick('Cartão de débito')}
            >
                <StyledBank size={32} />
                Cartão de débito
            </Button>
            <Button
                type="button"
                selected={value === 'Dinheiro'}
                onClick={() => handleButtonClick('Dinheiro')}
            >
                <StyledMoney size={32} />
                Dinheiro
            </Button>
        </ButtonGroup>
    );
}