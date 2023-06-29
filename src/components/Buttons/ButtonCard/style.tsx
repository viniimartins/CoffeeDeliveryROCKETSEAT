import { ShoppingCartSimple } from "phosphor-react";

import styled from "styled-components";

export const StyledButton = styled.button`
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purble-dark"]};
  border: none;

  cursor: pointer;


  :hover {
    background-color: ${(props) => props.theme["purble-base"]};
  }

`;


export const StyledShoppingCard = styled(ShoppingCartSimple)`
  width: 1.375rem;
  height: 1.375rem;
  
  color: ${(props) => props.theme["base-white-500"]};
`;
