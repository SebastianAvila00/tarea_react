import React from "react";

function Boton( {texto, calcular} ) {

    return(

        <button onClick={calcular}>
            {texto}
        </button>

    );

}


export default Boton;