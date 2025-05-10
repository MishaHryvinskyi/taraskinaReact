import styled from 'styled-components'

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    list-style: none;
    width: 280px;
    max-width: 480px;
    background-color: skyblue;
    border-radius: 10px;

    @media (min-width:1200px) {
        width: 370px;
    }
`;

export const ItemTitle = styled.h2`
    color: white;
    margin: 0 0 30px 0;
`;

export const Img = styled.img`
    display: block;
    width: 300px;
    background-color: white;
    height: 300px;
    object-fit: contain;
    border-radius: 10px;
`;