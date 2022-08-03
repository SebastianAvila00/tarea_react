import React from "react";
import Boton from "./Boton";

function CardDetails({ objeto }) {
    return (

        <div className='card'>

            <div className='head-card'>
                <h3>{objeto.descripcion}</h3>
            </div>

            <div className='foot-card'>

                <h3>{objeto.nombre}</h3>

                <div className="btn-card">

                    <Boton
                        Ruta='/Cart'
                        NombreBoton="Carrito"
                    />

                    <Boton
                        NombreBoton="Add"
                        Ruta={`/cart`}
                        objeto={objeto}
                    />
                </div>
            </div>

        </div>

    )
}

export default CardDetails;