import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    max-width: 403px;
    height: 56px;
    padding: 7px 7px 7px 25px;
    background: #FFFFFF;
    border-radius: 122px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        border: none;
        outline: none;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 150%;
        color: #A0AFBA;
        &::placeholder {
            color: #A0AFBA;
        }
    }
`

export const SearchIcon = styled.button`
    height: 42px;
    width: 42px;
    background: rgba(158, 185, 225, 0.1);
    border-radius: 122px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border .3s;
    &:hover {
        border: 1px solid ${colors['all']};
    }
    svg {
        height: 2rem;
        width: 2rem;
        color: ${colors['all']};
    }
`
