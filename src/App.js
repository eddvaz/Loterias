import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LotoFacil from "./Pages/lotofacil";
import LotoMania from "./Pages/lotomania";
import MegaSena from "./Pages/megasena";
import Quina from "./Pages/quina";
import * as S from "./Styles/GlobalStyle";

function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <S.Menu>
        <a href="/">
          <li>Página Inicial</li>
        </a>
        <a href="/megasena">
          <li>Mega Sena</li>
        </a>
        <a href="/lotofacil">
          <li>Lotofácil</li>
        </a>
        <a href="/quina">
          <li>Quina</li>
        </a>
        <a href="/lotomania">
          <li>Lotomania</li>
        </a>
      </S.Menu>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/megasena" element={<MegaSena />}/>
        <Route path="/lotofacil" element={<LotoFacil />}/>
        <Route path="/quina" element={<Quina />}/>
        <Route path="/lotomania" element={<LotoMania />}/>
      </Routes>
    </Router>
  )
}

export default App;
