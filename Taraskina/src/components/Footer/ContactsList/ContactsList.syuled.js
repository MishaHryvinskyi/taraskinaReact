import styled from "styled-components";

export const ListContactContainer = styled.ul`
    padding: 0;
    margin: 0;

    & li {
        list-style: none;

        a {
            text-decoration: none;
            color: white;

            svg {
                margin-right: 20px;
            }
        }
    }

    & li:not(:last-child) {
        margin-bottom: 40px;
    }


    @media (min-width:768px) {
        
    }
`;