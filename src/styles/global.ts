import { createGlobalStyle } from 'styled-components';
// import { Icons } from './icons';
import editIcon from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";
import closeIcon from "../assets/icon-close.svg";
import helpIcon from "../assets/icon-help.svg";

export const GlobalStyle = createGlobalStyle`



    :root {
        --background: #ffffff;
        --green: #86C51F;
        --red: #EC3F5F;
        --blue: #1DBAD3;
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

    ul > li {
        list-style: none;
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
        background-repeat: no-repeat;
        display: block;
        height: 30px;
        width: 30px;

        &.icon-delete { background-image: url(${deleteIcon}); }
        &.icon-edit { background-image: url(${editIcon}); }
        &.icon-close { background-image: url(${closeIcon}); }
        &.icon-help { background-image: url(${helpIcon}); }
    }

    .button-green {
        background: var(--green);
        color: #fff;
    }

    .button-red {
        background: var(--red);
        color: #fff;
    }

    .button-blue {
        background: var(--blue);
        color: #fff;
    }

    .link-reset {
        text-decoration: none;
        color: #000;
    }


`;