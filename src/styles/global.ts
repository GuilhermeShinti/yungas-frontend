import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #ffffff;
        --green: #86C51F;
        --red: #EC3F5F;
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

    .btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        border: 1px solid transparent;
        border-radius: 5px;
    }

    .btn-icon {
        padding: 0px;
    }

    .btn-icon > span {
        background-position: center;
        display: block;
        height: 30px;
        width: 30px;
    }

    .button-green {
        background: var(--green);
        color: #fff;
    }

    .button-red {
        background: var(--red);
        color: #fff;
    }
`;