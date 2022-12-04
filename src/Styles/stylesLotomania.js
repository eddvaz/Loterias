import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: #EFEFEF;
`

export const NumbersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    gap: 12px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;   
    width: 100%;
`

export const SideBarLotomania = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFAB64;

    h1{
        color: #FFFFFF;
    }

    img{
        margin-right: 20px;
    }
`

export const Teste = styled.div`
    border-radius: 100% 0% 0% 100% / 52% 30% 70% 48%;
    border: 1x solid;
    height: 100vh;
    width: 200px;
    background-color: #EFEFEF;
`