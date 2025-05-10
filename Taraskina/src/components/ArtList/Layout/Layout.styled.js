import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    background-color: #1d1716;
`;

export const TaraskinaLogo = styled(NavLink)`
    padding: 4px 10px;
    border-radius: 5px;
    width: 340px;
    color: #000000;
    background-color: #f2f2f2;
    text-decoration: underline;
    text-align: center;
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-size: 48px;
    letter-spacing: 3px;
    margin: 0 auto;
    
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        box-shadow: 0px 0px 39px 5px #5c5470;;
        box-shadow: 0px 0px 39px 5px #5c5470;;
        box-shadow: 0px 0px 39px 5px #5c5470;;
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style: none;
    
    li:not(:last-child) {
        margin-right: 40px;
    }
`;

export const HeaderLink = styled(NavLink)`
    border-radius: 40px;
    padding: 12px 18px;
    display: inline-block;
    color: #d8d8d3;
    font-size: 24px;
    font-weight: 700;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: #dbd8e3;
        color: #2a2438; 
        box-shadow: 0px 0px 39px 5px #5c5470;
    }
`;