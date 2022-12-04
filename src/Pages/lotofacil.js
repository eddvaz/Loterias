import axios from "axios";
import React, { useEffect, useState } from "react";
import { BallContent } from "../Styles/ballsStyles";
import * as S from "../Styles/stylesLotofacil";
import megalogo from "../assets/mega-logo.png";

const Lotofacil = () => {
    const url = "https://apiloterias.com.br/app/resultado?loteria=lotofacil&token=KbLEhdYPIL6X50G"
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
            <S.SideBarLotofacil>
                <S.Logo>
                    <img src={megalogo}/>
                    <h1>Lotofácil</h1>
                </S.Logo>
                <S.Teste></S.Teste>
            </S.SideBarLotofacil>
            <S.NumbersContainerLotfacil>
                {numeros.map((item) => (
                    <BallContent>
                        <p>{item}</p>
                    </BallContent>
                ))}
            </S.NumbersContainerLotfacil>
        </S.Container>
    )
}

export default Lotofacil;