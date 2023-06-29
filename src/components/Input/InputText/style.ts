import styled from "styled-components";

export const StyledInputText = styled.input`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;

  padding: 10px;
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  background-color: ${(props) => props.theme["base-white-700"]};
  border: 1px solid #e6e5e5;
  color: ${(props) => props.theme["base-black-500"]};

  &::placeholder {
    color: ${(props) => props.theme["base-black-300"]};
  }

  /* Estilos padrão */

  /* Estilos quando o input estiver ativo e vazio */
  &:focus:empty {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  /* Estilos quando o input estiver ativo e preenchido */
  &:focus:not(:empty) {
    border-color: green;
  }
`;
