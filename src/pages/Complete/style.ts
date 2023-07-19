import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: auto;
`;

export const ContainerConfirmed = styled.div`
  display: flex;
  position: relative;

  > div {
    width: 50%;
  }

  div > h1 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }

  div > p {
    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }
`;

export const ContainerCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background-color: ${(props) => props.theme["base-white-300"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  div > p {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-500"]};
  }

  div > p > span {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }

  div > span {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-black-700"]};
  }
`;

export const ContainerImage = styled.div`
    position: absolute;
    top: 7rem;
    right: -5rem;
`;
