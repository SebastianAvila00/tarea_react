import React, { useState, useEffect } from "react"
import './App.css';
import PokeList from "./componentes/PokeList";
import Boton from "./componentes/Boton";

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON.results);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="App">

      <header>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Poke-logo"></img>
      </header>

      <main>
        <PokeList todos={todos} />
      </main>


      <div className="cont-btn">
        <Boton
          texto="Volver"
        />

        <Boton
        texto="Siguiente"

        />


      </div>

    </div>


  );
}

export default App;
