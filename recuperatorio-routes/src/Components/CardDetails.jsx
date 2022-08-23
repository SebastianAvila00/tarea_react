import React from "react";
import Boton from "./Boton";


function CardDetails({ objeto }) {
    return (
        <div className="card-details">

            <div className="cont-btn">
                <Boton
                    NombreBoton="Volver"
                    Ruta="/" />
            </div>


            <div> <p className="titulo"> Aquí tienes los detalles de {objeto.nombre}
            </p></div>

            <div className="card">

                <div className="head-card">
                    <h3>{objeto.descripcion}</h3>
                    <img className="img-zapas" src={objeto.Imagen} alt={objeto} />
                </div>

                <div className="foot.card">
                    <div className="descripcion">

                        <h3 className="detalles-desc">Talle: {objeto.tamaño} </h3>
                        <h3 className="detalles-desc">Color: {objeto.color} </h3>
                        <h3 className="detalles-desc">Precio: ${objeto.precio} </h3>

                    </div>

                    <div className="cont-btn">
                        <Boton
                            NombreBoton="Comprar"
                            Ruta="/cart" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CardDetails;