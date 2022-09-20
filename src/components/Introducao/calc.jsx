import React from "react";

function Calc({ op, x, y }) {
    
    function sum() {
        return x + y;
    }

    function sub() {
        return x - y;
    }

    function mult() {
        return x * y;
    }

    function div() {
        return x / y;
    }

    if (op === "sum")
        return (
            <div>
                A soma é {sum()}
            </div>
        )
    
    return (
        <div>
            A subtração é {sub()}
        </div>
    )
}

export default Calc;