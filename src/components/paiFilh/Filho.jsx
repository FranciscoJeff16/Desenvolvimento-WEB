import React from "react";

const filho = ({ nomePai, callbackPai }) => {
    return (
        <div>
            <button
                onClick={() => {callbackPai("Filho da Silva")}}
            >
                <h1>Nome do Pai: {nomePai}</h1>
            </button>
        </div>
    );
};

export default filho;