import styled from "styled-components";

export const StyledCardCatalog = styled.div`
  width: 16rem;
  height: 19.375rem;

  position: relative;

  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme["base-white-500"]};
`;

export const ContainerText = styled.div`
  margin: 0 1.25rem;
`;

export const Image = styled.img`
  position: absolute;
  top: -10%;
  width: 50%;
`;

export const CardBadge = styled.p`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border-radius: 6.25rem;

  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  font-family: "Roboto";
  text-transform: uppercase;

  margin-top: 7rem;
`;

export const TypeCoffee = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  margin-top: 1rem;
  color: ${(props) => props.theme["base-black-700"]};
`;

export const TextCoffee = styled.p`
  font-size: 0.875rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme["base-black-300"]};
  margin-top: 0.5rem;
`;

export const ContainerBuy = styled.div`
  display: flex;

  margin-top: 2rem;

  justify-content: center;
  gap: 0.5rem;
`;

export const InputPrice = styled.div`
  display: flex;

  color: ${(props) => props.theme["base-black-500"]};

  font-size: 0.875rem;
  font-family: Roboto;

  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  align-items: center;
  margin-right: auto;

  p {
    margin-left: 0.2rem;
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 900;
  }
`;
