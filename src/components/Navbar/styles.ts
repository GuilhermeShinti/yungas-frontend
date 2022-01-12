import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 72px;
    background: #2E3C56;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    margin: 0 1rem;
    width: 100%;
    
    div {

        &.user-box {
            display: flex;
            align-items: center;
            text-align: right;
            color: #fff;
            font-weight: 400;

            div {
                &.user-info {
                    margin-right: 15px;

                    span {
                        &.username {
                            font-size: 1rem;
                        }
                    }

                    p {
                        margin-top: 3px;
                        font-size: 0.7rem;
                    }
                }
            }

            div {
                &.user-avatar {
                    img {
                        width: 60px;
                        height: 60px;
                        border-radius: 100px;
                    }
                }
            }
        }
    }
`