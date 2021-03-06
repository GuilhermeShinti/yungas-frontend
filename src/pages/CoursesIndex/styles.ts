import styled from "styled-components";
import editIcon from "../../assets/icon-edit.svg";
import deleteIcon from "../../assets/icon-delete.svg";


export const Container = styled.section`
    padding: 20px;
    
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    ul {

        li {
            background: #F5F9F9;
            box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            margin-bottom: 30px;

            &.course {
                display: flex;
                width: 100%;
                min-height: 100px;

                img {
                    max-width: 170px;
                    width: 100%;
                }

                .course-info {
                    display: flex;
                    padding: 15px;
                    width: 100%;
                    justify-content: space-between;
                    
                    .course-description {
                        .course-name {
                            display: block;
                            margin-bottom: 5px;
                        }
                    }

                    .course-status {
                        justify-content: space-between;
                        display: flex;
                        flex-direction: column;

                        span.status {
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

                        .action {
                            display: flex;
                            justify-content: end;

                            button {
                                /* display: flex;
                                align-items: center;
                                background: none;
                                border: 1px solid transparent;
                                padding: 4px 8px;
                                border-radius: 5px; */

                                transition: border 0.5s;
                                &:hover {
                                    border: 1px solid #c3c3c3;
                                    /* border-radius: 5px; */
                                }

                                /* .icon-delete {
                                    background: url(${deleteIcon}) no-repeat center;
                                }

                                .icon-edit {
                                    background: url(${editIcon}) no-repeat center;
                                } */
                            }
                        }
                    }
                }

                
            }
            
        }
    }
`;