import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    background-color: #333333;
    width: 100%;

    a{
        list-style: none;
        text-decoration: none;
        color: #FFFF;
    }
`