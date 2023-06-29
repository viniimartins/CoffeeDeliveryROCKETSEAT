import styled from "styled-components";

export const StyledCardCart = styled.div`
  display: flex;
  width: 23rem;
  padding: 0.5rem 0.25rem;

  justify-content: space-between;
  align-items: flex-start;

  background-color: ${(props) => props.theme["base-white-500"]};

  p {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;

  margin-right: 1.25rem;
`;

export const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: auto;


  h1 {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
