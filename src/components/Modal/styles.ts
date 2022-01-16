import styled from "styled-components";
import { Icons } from "../../styles/icons";
import closeIcon from "../../assets/icon-close.svg";
import helpIcon from "../../assets/icon-help.svg";


export const Overlay = styled.div`
    background: #0000007a;
    position: absolute;
    z-index: 998;
    display: block;
    height: 100%;
    width: 100%;
    right: 0px;
    top: 0px;
`;

export const Container = styled.div`
    position: absolute;
    height: 100%;
    background: #f9f9f9;
    max-width: 580px;
    width: 100%;
    right: 0;
    padding: 20px;

    span {
        &.icon-close { background: url(${closeIcon}) no-repeat; }
        &.icon-help { background: url(${helpIcon}) no-repeat; }        
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin-bottom: 30px;

    .title {
        text-align: center;
        font-weight: 600;
        font-size: 600;
    }
`;

export const Content = styled.div`
    input, textarea {
        margin-bottom: 10px;
    }
`;

export const Footer = styled.div`
    position: sticky;
    top: 100vh;
    justify-content: space-between;
`;

