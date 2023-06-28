import styled from "styled-components";
import { ShoppingCart } from "phosphor-react"

export const BadgeContainer = styled.div`
   height: 2.375rem;
  width: 2.375rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["yellow-light"]};
  border: none;

`;


export const NumberContainer = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem; /* Alterado para mover o número para o canto direito */
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-base"]};

`;


export const NumberText = styled.span`
  color: ${(props) => props.theme["base-white-100"]};
  font-family: roboto;
  font-weight: bold;

`;

export const StyledShoppingCart = styled(ShoppingCart)`
  color: ${(props) => props.theme["yellow-dark"]};
`;
