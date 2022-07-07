import React from "react";


function Input({valorId, valorPlaceHolder, cambiarValor}) {

    return (
        <input type = "text" placeholder={valorPlaceHolder} onChange ={cambiarValor} id={valorId}

          />

    )
}

export default Input;