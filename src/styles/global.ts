import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme["base-white-300"]};
        color: ${(props) => props.theme["base-black-500"]};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme["base-white-900"]};;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;
