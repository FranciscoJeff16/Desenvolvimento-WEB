import React from "react";

function IMC({ peso, altura }) {

    function calcIMC() {
        return peso / (altura * altura);
    }

    const imcs = calcIMC();

    function TabelaIMC() {
        if (imcs < 17) {
            return (
                <div>
                    Você está muito abaixo do peso
                </div>
            )
        } else if (imcs.imc > 17) {
            return (
                <div>
                   Você está abaixo do peso
                </div>
            )
        }
    }

    return (
        <div>
            O IMC é {imcs.toFixed(2)} <br />
            A sua situação é: {TabelaIMC()}
        </div>
    )
}



export default IMC;