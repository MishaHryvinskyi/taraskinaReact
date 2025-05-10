import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr;


    @media (min-width:1200px) {
        grid-template-columns: 370px 370px 370px;
    }
`;