import React from "react";
import Pokeitem from "./PokeItem";
import "../hojas-estilos/PokeList.css"

function PokeList({ todos, suma}) {

    return (

        <ul>
            {!todos ? "cargando..." : todos.map((todo, index) => {
                return (

                    <Pokeitem key={`id-${index + suma}`} todo={todo} index={index + suma} />
                );
            })
            }

        </ul>
    )
}



export default PokeList;
