import styled from "styled-components";
import { Minus, Plus } from "phosphor-react";

type InputProps = {
  isOptional?: boolean;
  width: number;
  height?: number;
};

export const StyledInputNumber = styled.div<InputProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;

  background-color: ${(props) => props.theme["base-white-900"]};
  color: ${(props) => props.theme["base-black-900"]};

  font-family: roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;
`;

export const StyledMinus = styled(Minus)`
  width: 0.875rem;
  height: 0.875rem;
  color: ${(props) => props.theme["purble-base"]};

  :hover {
    color: ${(props) => props.theme["purble-dark"]};
  }
`;

export const StyledPlus = styled(Plus)`
  width: 0.875rem;
  height: 0.875rem;
  color: ${(props) => props.theme["purble-base"]};

  :hover {
    color: ${(props) => props.theme["purble-dark"]};
  }
`;
