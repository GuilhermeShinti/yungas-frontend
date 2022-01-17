import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

    header {
        display: flex;
        border-bottom: 2px solid #1DBAD3;

        a {
            text-decoration: none;
            max-width: 200px;
            width: 100%;

            &:nth-child(1) > div {
                border-radius: 5px 0 0 0;
            }

            &:nth-child(2) > div {
                border-radius: 0 5px 0 0;
            }
            
            > div {
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                background: #DEE2E6;
                font-weight: 600;
                
                &.active {
                    background: #1DBAD3;
                    color: #fff;
                }
            }
        }


    }
`

