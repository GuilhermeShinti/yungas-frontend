import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        display: flex;
    }

    body {
        background: var(--background);
    }

    body, input, textarea, button {
        font-family: sans-serif;
        font-weight: 400;
    }
`;