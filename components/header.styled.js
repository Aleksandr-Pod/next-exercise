import Link from 'next/link';
import styled from 'styled-components';

export const Section = styled.header`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;  
    height: 60px;
    background-color: purple;
    color: yellow;
    align-items: center;
`
export const NavButton = styled.a`
    padding: 5px 10px;
    margin-left: 10px; 
    text-align: center;
    font-size: 16px;
    color: yellow;
    background-color: gray;
    border-radius: 5px;
    cursor: pointer;
    &:hover {background-color: darkgray;}
`