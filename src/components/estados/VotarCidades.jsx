import React from "react";
import { useState } from "react";

const VotaCidades = () => {

    const [quixada, setQuixada] = useState(0);
    const [crateus, setCrateus] = useState(0);
    const [limoeiro, setLimoeiro] = useState(0);
    const [botao, setBotao] = useState(false);
    
    const vQuixada = () => {
        setQuixada(quixada + 1);
    };

    const vCrateus = () => {
        setCrateus(crateus + 1);
    };

    const vLimoeiro = () => {
        setLimoeiro(limoeiro + 1);
    };
    const bMostrar = () => {
        setBotao(!botao);
    };

    const zerar = () => {
        setQuixada(0);
        setCrateus(0);
        setLimoeiro(0);
    };

    const renderizarVotos = () => {
        if (botao) {
            if (quixada > crateus && quixada > limoeiro) {
                return (
                    <h1>Quixadá é a cidade mais votada</h1>
                )
            } else if (crateus > quixada && crateus > limoeiro) {
                return (
                    <h1>Crateús é a cidade mais votada</h1>
                )
            } else if (limoeiro > crateus && limoeiro > quixada) {
                return (
                    <h1>Limoeiro do Norte é a cidade mais votada</h1>
                )
            } else {
                return (
                    <h1>Empate</h1>
                )
            }
        }
        
        
    }

    return (
        <div>
            <div>
                <h1>Vote na sua cidade favorita</h1>
                <h2> Quixadá: {quixada} </h2>
                <h2> Crateús: {crateus} </h2>
                <h2> Limoeiro do Norte: {limoeiro} </h2>
            </div>
            <div>
               <h3> Clique na cidade que deseja votar: </h3>
                <button onClick={vQuixada}>Quixadá</button> |
                <button onClick={vCrateus}>Crateús</button> | 
                <button onClick={vLimoeiro}>Limoeiro do Norte</button> <br /> <br />
                <button onClick={bMostrar}>Mostrar Campeã</button> <br />
                <button onClick={zerar}>Zerar votos</button>
                {
                    renderizarVotos()
                }
                
            </div>
        </div>
        //botão para decidir que venceu
    );
}

export default VotaCidades;