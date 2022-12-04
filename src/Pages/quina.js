import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallContent } from "../Styles/ballsStyles";
import * as S from "../Styles/stylesPages";
import megalogo from "../assets/mega-logo.png"

const Quina = () => {
    const url = "https://apiloterias.com.br/app/resultado?loteria=quina&token=KbLEhdYPIL6X50G"

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
            <S.SideBarQuina>
                <S.Logo>
                    <img src={megalogo}/>
                    <h1>Quina</h1>
                </S.Logo>
                <S.Teste></S.Teste>
            </S.SideBarQuina>
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

export default Quina;