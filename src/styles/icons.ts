import styled from "styled-components";

import editIcon from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";
import closeIcon from "../assets/icon-close.svg";
import helpIcon from "../assets/icon-help.svg";

export const Icons = styled.span`
    &.icon-delete { background: url(${deleteIcon}) no-repeat; }
    &.icon-edit { background: url(${editIcon}) no-repeat; }
    &.icon-close { background: url(${closeIcon}) no-repeat; }
    &.icon-help { background: url(${helpIcon}) no-repeat; }
`