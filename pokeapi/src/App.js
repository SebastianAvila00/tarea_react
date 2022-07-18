import React, { useState, useEffect } from "react"
import './App.css';
import PokeList from "./componentes/PokeList";
import Boton from "./componentes/Boton";

function App() {

  let indexImg = 0;

  const [todos, setTodos] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON.results);
  }


  const nextUrl = async (event) => {
    const response = await fetch(url);
    console.log("pasó la pagina");
    const responseJSON = await response.json();
    setTodos(responseJSON.results);
    setUrl(responseJSON.next);
    console.log(responseJSON.next)
    indexImg = indexImg + 20;
  }


  const backUrl = async (event) => {
    setUrl();
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON.results);
    setUrl(responseJSON.previous);
    indexImg = indexImg - 20;
    console.log("volvió")
    console.log(responseJSON.previous)
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
        <PokeList todos={todos} suma={indexImg} />
      </main>


      <div className="cont-btn">
        <Boton
          texto="Volver"
          cambiarPagina={() => backUrl()}

        />

        <Boton
          texto="Siguiente"
          cambiarPagina={() => nextUrl()}
        />


      </div>

    </div>


  );
}

export default App;
