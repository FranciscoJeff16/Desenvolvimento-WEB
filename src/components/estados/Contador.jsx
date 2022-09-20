import React from "react";
import { useState } from "react";


const Contador = () => {
    const [contador, setContador] = useState(0);
    const [sena, setSena] = useState(true);

    const contar = () => {
        setContador(contador + 1);
    }

    const mostrarSena = () => {
        setSena(!sena);
    }

    const redenrizarSena = () => {
        if (sena) {
            return (
                <img src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-225x300.png" />
            )
        } else {
            return null;
        }
    }

    return (
        <div>
            <h1>Contador {contador}</h1>
            <button onClick={contar}>Acrescentar</button>
            <button onClick={() => { setContador(contador - 1) }}>Diminuir</button>
            <button onClick={mostrarSena}>Sena</button>
            {
                redenrizarSena()
            }
        </div>
    );
}

export default Contador;