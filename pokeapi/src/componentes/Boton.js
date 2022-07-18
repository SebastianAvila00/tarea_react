import React from "react";
import "../hojas-estilos/Boton.css"


function Boton( {texto, cambiarPagina} ) {

    return(

        <button onClick={cambiarPagina}>
            {texto}
        </button>

    );

};


export default Boton;