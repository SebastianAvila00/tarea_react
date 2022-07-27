import React from "react";


function Sugerencias({ tendencia, contenido, vistas }) {
    return (
        <div className="tendencias">
            <p className="tendencia-sugerencia">{tendencia}</p>
            <h2 className="contenido-sugerencia">{contenido}</h2>
            <p className="vistas-sugerencias">{vistas}</p>
        </div>
    )

}

export default Sugerencias;