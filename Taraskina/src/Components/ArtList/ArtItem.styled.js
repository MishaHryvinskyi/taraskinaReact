import styled from 'styled-components'

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    list-style: none;
    width: 100%;
    max-width: 480px;
    background-color: #113f67; 
    border-top: 2px solid #ffb5b5; 
    border-bottom: 2px solid #ffb5b5;
    border-radius: 10px;

    @media (min-width:768px) and (max-width:1199px) {
        width: 167px;
        padding: 10px;
    }

    @media (min-width:1200px) {
        width: 370px;
    }
`;

export const ItemTitle = styled.h2`
    color: #e7eaf6;  
    margin: 0 0 30px 0;
`;

export const Img = styled.img`
    display: block;
    width: 300px;
    background-color:  #407088; 
    height: 300px;
    object-fit: contain;
    border: 2px solid #e7eaf6; 
    border-radius: 10px;

    @media (min-width:768px) and (max-width:1199px) {
        width: 147px;
        height: 147px;
    }
`;