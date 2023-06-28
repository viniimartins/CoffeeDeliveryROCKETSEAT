import styled from "styled-components";

interface StyledProps {
  width: number;
}

export const StyledButton = styled.button<StyledProps>`
  width: 8.25rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme["yellow-base"]};
  color: ${(props) => props.theme["base-white-100"]};
  border: none;

  padding: 0.75rem 0.5rem;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;



