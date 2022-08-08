import React from "react";
import { Link } from 'react-router-dom';


function Boton({NombreBoton, Ruta, Clase}) {
    return (

            <button className={Clase}> <Link to={Ruta}>{NombreBoton}</Link></button>
    
    )
}

export default Boton;