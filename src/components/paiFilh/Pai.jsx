import React from "react";
import Filho from "./Filho";

const Pai = () => {
    const callbackPai = (msg) => {
        alert('Mensagem do filho: ' + msg)
    }

    return (
        <div>
            <Filho nomePai="Pai da Silva" callbackPai={callbackPai} />
        </div>
    );
};

export default Pai;