import React from "react";


function Seguir({ fotoSeguir, nombreSeguir, arrobaSeguir, imagen }) {
    return (

        <div className="cont-seguir">

            <img className="img-user" src={require(`../imagen/${imagen}`)} />

            <div >
                <p className="nombre-seguir">{nombreSeguir}</p>
                <p className="arroba-seguir">{arrobaSeguir}</p>
            </div>
        </div>

    )
}

export default Seguir;