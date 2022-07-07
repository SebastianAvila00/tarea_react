import React from 'react';


function Boton( {texto, presionar} ){
    return(

    <button onClick={presionar}>
        {texto}

    </button>
)}

export default Boton;