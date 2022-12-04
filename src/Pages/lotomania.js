import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallContent } from "../Styles/ballsStyles";
import * as S from "../Styles/stylesLotomania";
import megalogo from "../assets/mega-logo.png";

const Lotomania = () => {
    const url = "https://apiloterias.com.br/app/resultado?loteria=lotomania&token=KbLEhdYPIL6X50G"

    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setNumeros(res.data.dezenas)
            console.log(res.data.dezenas)
        })
        .catch((err) => {
            console.log("Not Found")
        })
    }, [])

    return (
        <S.Container>
            <S.SideBarLotomania>
                <S.Logo>
                    <img src={megalogo}/>
                    <h1>Lotomania</h1>
                </S.Logo>
                <S.Teste></S.Teste>
            </S.SideBarLotomania>
            <S.NumbersContainer>
                {numeros.map((item) => (
                    <BallContent>
                        <p>{item}</p>
                    </BallContent>
                ))}
            </S.NumbersContainer>
        </S.Container>
    )
}

export default Lotomania;