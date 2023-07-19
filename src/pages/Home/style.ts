import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: auto;
`;

export const ContainerBanner = styled.section`
  margin: 6rem 0;


  display: flex;
  flex-direction: row;
`;

export const ContainerText = styled.div`
  width: 58%;

  h1 {
    width: 36.75rem;

    font-size: 3rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["base-black-900"]};
  }

  > p {
    width: 36.75rem;

    font-size: 1.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme["base-black-700"]};

    margin-top: 1rem;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const ItenColumm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 4rem;

  &:last-child {
    margin-right: 0; /* Remove a margem da última coluna */
  }
`;

export const Item = styled.div`
  width: auto;
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme["base-black-500"]};

  margin-bottom: 1.5rem;

  > img {
    margin-right: 0.75rem;
  }
`;

export const Image = styled.img``;

export const ContainerImage = styled.div`
  width: 42%;
`;

export const ContainerCoffee = styled.section`
  padding-top: 2rem;

  & > h2 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["base-black-700"]};

    margin-bottom: 3.5rem;
  }
`;

export const ContainerCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  padding-bottom: 10rem;
`;
