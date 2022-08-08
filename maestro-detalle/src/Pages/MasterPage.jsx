import React from "react";
import Api from "../componentes/Api";
import Boton from "../componentes/Boton";


function MasterPage() {
    return (
        <div>

            <Boton
                Ruta="/"
                NombreBoton="Volver"
                Clase="btn-maestro"
            />

            <h2>Aquí tienes los nombres de cada uno de los Maestros</h2>


            <Api />


            <h2>Clickea sus nombres para ver sus detalles</h2>
        </div>

    )
}

export default MasterPage;