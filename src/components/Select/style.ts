import { Bank, CreditCard, Money } from "phosphor-react";
import styled from "styled-components";

interface ButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

export const Button = styled.button<ButtonProps>`
  width: 11.616rem;
  height: 3rem;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  background-color: ${({ selected }) => (selected ? "#EBE5F9" : "#E6E5E5")};
  color: ${(props) => props.theme["base-black-100"]};
  border: 1px solid ${({ selected }) => (selected ? "#8047F8" : "#E6E5E5")};
  color: ${(props) => props.theme["base-black-500"]};

  font-size: 0.75rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  /* line-height: 160%; */
  text-transform: uppercase;

  border-radius: 6px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["base-black-100"]};
  }
`;

export const StyledCreditCard = styled(CreditCard)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme["purble-base"]};
`;

export const StyledBank = styled(Bank)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme["purble-base"]};
`;

export const StyledMoney = styled(Money)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme["purble-base"]};
`;
