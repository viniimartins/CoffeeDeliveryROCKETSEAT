import styled from "styled-components";

export const Container = styled.form`
  max-width: 70rem;
  margin: auto;

  display: flex;
  gap: 2rem;
`;

export const ContainerAndress = styled.div`
  width: 60%;

  > h1 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }
`;

export const Andress = styled.div`
  background-color: ${(props) => props.theme["base-white-500"]};
  border-radius: 0.375rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;

  > div > h2 {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }

  > div > p {
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Payment = styled.div`
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme["base-white-500"]};
  padding: 2.5rem;
  display: flex;
  align-items: start;
  flex-direction: column;

  border-radius: 0.375rem;

  gap: 2rem;

  div > h2 {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }

  div > p {
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }
`;

export const ContainerCoffee = styled.div`
  width: 40%;

  > h1 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }
`;

export const Coffee = styled.div`
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${(props) => props.theme["base-white-500"]};

  margin-top: 1rem;

  > div {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme["base-white-900"]};
  }
`;

export const CoffeePrice = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div > h2 {
    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }

  div > span {
    display: flex;
    gap: 0.25rem;
  }

  div > span > p {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }

  div > h1 {
    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }

  div > span > h3 {
    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }
`;
