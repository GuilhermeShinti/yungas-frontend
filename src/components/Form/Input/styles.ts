import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    label {
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
    }

    input {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        padding: 5px 10px;
        font-size: 16px;

        &:focus { 
            outline: none !important;
            border-color: #626262;
        }
    }
`;