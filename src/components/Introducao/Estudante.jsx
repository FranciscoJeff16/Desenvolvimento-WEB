import React from "react";

const estudante = (props) => {
    const {nome, curso, universidade} = props;
    return (
        <div>
            Nome: {nome} <br />
            Curso: {curso}<br />
            Universidade: {universidade}<br />
        </div>
    )
}
    

export default estudante;