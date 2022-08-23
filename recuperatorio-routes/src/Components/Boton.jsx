import React from "react";
import { Link } from "react-router-dom"

function Boton({ NombreBoton, Ruta }) {
    return (
        <div>
            <Link to={Ruta}> <button className="boton">{NombreBoton}</button></Link>
        </div >
    )
}

export default Boton;