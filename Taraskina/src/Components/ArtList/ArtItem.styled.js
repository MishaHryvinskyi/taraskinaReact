import styled from 'styled-components'

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    list-style: none;
    max-width: 480px;
    background-color: #1D1716; 
    border-radius: 10px;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
    transform: scale(1.03); 
    box-shadow: 0px 0px 20px 2px #5c5470;
}

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
    object-fit: cover;
    border-radius: 10px;

    @media (min-width:768px) and (max-width:1199px) {
        width: 147px;
        height: 147px;
    }
`;