import styled from "styled-components";

export const Container = styled.nav`
    height: 100%;
    /* width: 100px; */
    display: flex;
    background: #222E44;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        width: 100px;
        
        li {
            display: flex;
            justify-content: center;
            padding: 23px 0;
            width: 100%;
            transition: background 0.5s;

            &:hover {
                background: #2E3C56;
            }
        }
    }
`;