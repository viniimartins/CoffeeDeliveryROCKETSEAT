import { MapPin } from "phosphor-react";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;

  max-width: 70rem;
  margin: auto;
  padding: 2rem 0rem;
  justify-content: space-between;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Image = styled.img`
  width: 5.3095rem;
  height: 2.5rem;
`;

export const ButtonCity = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme["purble-dark"]};
  font-size: 0.875rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  cursor: pointer;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["purble-light"]};
`;

export const StylediconMap = styled(MapPin)`
  width: 1.375rem;
  height: 1.375rem;
  color: ${(props) => props.theme["purble-base"]};
`;
