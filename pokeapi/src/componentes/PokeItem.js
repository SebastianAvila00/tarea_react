import React from "react";
import "../hojas-estilos/PokeItem.css"

function Pokeitem({ todo, index }) {
    return (

        <li className="lista">
                <img className="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
                {todo.name}
            
        </li>
    );
}

export default Pokeitem;