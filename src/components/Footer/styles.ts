import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.footer`
    width: 100%;
    background-color: ${colors['all']};
    padding-top: 6.7rem;
    padding-bottom: 6.5rem;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Text = styled.div`
    h3 {
        color: #fff;
    }
    p {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 180%;
        color:  rgba(255, 255, 255, 0.37);
    }
`;