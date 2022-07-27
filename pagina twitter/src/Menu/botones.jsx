import React from "react";


function Boton({ nombre }) {
    return (
        <button className={
            (nombre === "Twittear") 
            ? "btn-celeste" 
            : (nombre === "Twittear-mini") 
            ? "btn-chiquito"
            : "btn-negro"
        }>

            {
                (nombre === "Twittear" || nombre === "Twittear-mini") 
                ? "Twittear" 
                : "Seguir"
            }
        </button>
    )
} // classnName = "btn-celeste"

export default Boton;