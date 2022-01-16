import styled from 'styled-components';
import bookIcon from '../../assets/icon-book.svg';
import arrowDownIcon from '../../assets/icon-arrow-down.svg';
import arrowUpIcon from '../../assets/icon-arrow-up.svg';


export const Container = styled.section`
    padding: 20px;

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
        height: 40px;
    }

    ul.module-list {
        li {
            &.module-item {
                background: #F5F9F9;
                margin-bottom: 10px;
                border-radius: 5px;
                font-weight: 600;

                details {
                    &[open]> summary::after {
                        content: url(${arrowUpIcon});
                    }

                    summary {
                        height: 50px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        list-style: none;
                        padding: 10px 15px;
                        cursor: pointer;

                        &:after {
                            content: url(${arrowDownIcon});
                        }

                        span.disabled {
                            margin-left: 20px;
                            padding: 5px 20px;
                            height: 25px;
                            font-size: 14px;
                            font-weight: 400;
                            border-radius: 50px;

                            &:after {
                                content: 'DESABILITADO';
                            }

                            @media(max-width: 800px) {
                                height: 25px;
                                width: 20px;
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

    ul.classes-list {
        li.class-item {
            height: 41px;
            display: flex;
            align-items: center;
            padding: 5px 15px;
            font-weight: 400;
            justify-content: space-between;

            > span {
                &:before {
                    margin-right: 10px;
                    content: url(${bookIcon});
                    padding: 3px 0 0 0;
                    vertical-align: -20%;
                }
            }

            &:nth-child(odd) {
                background: #FDF8F8;
            }
            &:nth-child(even) {
                background: #FCFDF8;
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