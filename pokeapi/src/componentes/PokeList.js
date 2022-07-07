import React from "react";
import Pokeitem from "./PokeItem";
import "../hojas-estilos/PokeList.css"

function PokeList({ todos }) {
    return (
        <ul>
            {!todos ? "cargando..." : todos.map((todo, index) => {
                return (

                    <Pokeitem key={`id-${index}`} todo={todo} index={index} />
                );
            })
            }

        </ul>
    )
}



export default PokeList;
