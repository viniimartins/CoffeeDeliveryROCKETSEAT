import { Trash } from "phosphor-react";
import styled from "styled-components";

export const StyledButton = styled.button`
  height: 2rem;

  padding: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: none;
  gap: 0.25rem;

  font-size: 0.75rem;
  background-color: ${(props) => props.theme["base-white-900"]};
  color: ${(props) => props.theme["base-black-500"]};

  :hover {
    color: ${(props) => props.theme["base-black-700"]};
    background-color: ${(props) => props.theme["base-black-100"]};
  }

  :hover > svg {
    color: ${(props) => props.theme["purble-dark"]};
  }
`;

export const StyledTrashIcon = styled(Trash)`
  color: ${(props) => props.theme["purble-base"]};
`;
