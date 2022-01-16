import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

    header {
        display: flex;
        border-bottom: 2px solid #1DBAD3;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 200px;
            width: 100%;
            height: 40px;
            background: #DEE2E6;
            border-radius: 5px 5px 0 0;
            font-weight: 600;

            &:nth-child(1) {
                border-radius: 5px 0 0 0;
            }
            &:nth-child(2) {
                border-radius: 0 5px 0 0;
            }
            
            &.active {
                background: #1DBAD3;
                color: #fff;
            }
        }
    }
`

