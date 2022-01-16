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

    ul.modules-list {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 12px;

        li {
            display: flex;
            flex-direction: column;
            background: #F5F9F9;
            max-width: 292px;
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
            border-radius: 5px;

            &.card {
                img {
                    height: 100px;
                    background: #ddd;
                }

                .card-content {
                    padding: 15px;
                }

                .card-header {
                    justify-content: space-between;
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                }

                .card-body {
                    height: 100px;
                }
                .card-footer {
                    justify-content: space-between;
                    display: flex;
                    align-items: center;

                    span {
                        color: #fff;
                        border-radius: 15px;
                        padding: 5px 15px;
                        font-size: 14px;      
                        align-self: end;


                        &.enabled {
                            background: #86C51F;

                            &:after {
                                content: 'HABILITADO';
                            }

                            @media(max-width: 800px) {
                                height: 25px;
                                width: 25px;
                                border-radius: 50%;
                                padding: 2px 10px;

                                &:after {
                                    content: '';
                                }
                            }
                        }


                        &.disabled {
                            background: #EC3F5F;

                            &:after {
                                content: 'DESABILITADO';
                            }

                            @media(max-width: 800px) {
                                height: 25px;
                                width: 25px;
                                border-radius: 50%;
                                padding: 2px 10px;

                                &:after {
                                    content: '';
                                }
                            }
                        }
                    }                    
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