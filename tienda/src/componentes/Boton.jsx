import React from "react";
import { Link } from 'react-router-dom';


function Boton({ NombreBoton, Ruta, id }) {
    return (
        <button className="btn">
            <Link to={Ruta}>{NombreBoton}</Link>
        </button>
    )
}



export default Boton;