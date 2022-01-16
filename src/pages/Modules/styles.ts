import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px;

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
        height: 40px;

        .preview-mode {
            width: 100%;
            border-bottom: 2px solid #1DBAD3;

            button {
                /* padding: 5px 40px; */
                width: 200px;
                background: none;
                border: none;
                font-weight: 600;
                height: 100%;

                &.modules {
                    border-radius: 5px 0 0 0;
                }

                &.class {
                    border-radius: 0 5px 0 0;
                }

                &.active {
                    background: #1DBAD3;
                    color: #fff;
                }

                &.deactive {
                    background: #DEE2E6;
                    color: #333333;
                }
            }
        }


    }
`;

export const Content = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

    .newModule {
        background: #1DBAD3;
        border: none;
        border-radius: 5px;
        color: #fff;
        padding: 0 30px;
        /* width: 20%; */
    }
`;