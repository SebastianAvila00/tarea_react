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





// import React, { useEffect } from "react";
// import "../hojas-estilos/PokeItem.css";
// import { useState } from "react";

// function Pokeitem({ todo, index }) {

//     const [img, setimg] = useState();

//     const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${todo.name}/`


//     const imagenPokemon = async () => {
//         const response = await fetch(urlPokemon);
//         const responseJSON = await response.json();
//         setimg(responseJSON.sprites.front_default);
//     }

//     useEffect(() => {
//         imagenPokemon();
//     }, [])


//     return (

//         <li className="lista">
//             <img className="pokemon" src={img} alt="Pokemon" />
//             {todo.name}

//         </li>
//     );
// }

