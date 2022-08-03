import React from "react";
import Boton from "./Boton";

function Card({ objeto }) {
    return (

        <div className='card'>

            <div className='head-card'>
                <img src={objeto.Imagen} alt={objeto.altImagen} />
            </div>

            <div className='foot-card'>

                <h3>{objeto.nombre}</h3>

                <div className="btn-card">

                    <Boton
                        Ruta='/Cart'
                        NombreBoton="Carrito"
                    />
                    
                    <Boton
                        NombreBoton="Detalles"
                        Ruta={`/details/${objeto.id}`}
                        objeto={objeto}
                    />
                </div>
            </div>

        </div>

    )
}

export default Card;
