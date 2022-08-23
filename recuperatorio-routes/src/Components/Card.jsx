import React from "react";
import Boton from "./Boton";

function Card({ objeto }) {
    return (
        <div className="card">

            <div className="head-card">
                <p className="title-obj">{objeto.titulo}</p>
                <img className="img-zapas" src={objeto.Imagen} alt={objeto} />
            </div>


            <div className="foot-card">

                <h3 className="nombre-zapa">{objeto.nombre}</h3>

                <p className="precio">$ {objeto.precio}</p>


                <div className="cont-btn">
                    <Boton
                        NombreBoton="Detalles"
                        Ruta={`/Details/${objeto.id}`}
                        objeto={objeto}
                    />

                    <Boton
                        Ruta='/Cart'
                        NombreBoton="Comprar"
                    />
                </div>
            </div>

        </div>
    )
}

export default Card;