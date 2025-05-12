import styled from 'styled-components';

export const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    width: 300px;

    li {
        display: flex;
        align-items: center;
        border-radius: 50%;
    }
`;

export const SocialLink = styled.a`
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: #dbd8e3;
    background-color:#2a2438; 

    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: #dbd8e3;
        box-shadow: 0px 0px 39px 5px #5c5470;
        color: #2a2438; 
    }
`;