import Boton from "./componentes/Botones.js"
import "./Hojas-estilos/Botones.css"
import './App.css';
import { useState } from "react";



function App() {

  const [valorActual, setValorActual] = useState("0 - Cero");

  const presionar1 = () => {

    setValorActual("1 - Uno")
  };

  const presionar2 = () => {

    setValorActual("2 - Dos")
  };

  const presionar3 = () => {

    setValorActual("3 - Tres")
  };


  return (
    <div className="App">

      <span>{valorActual}</span>

      <div className="boton">
        <Boton
          texto="1"
          presionar={presionar1}
        />

        <Boton
          texto="2"
          presionar={presionar2}
        />

        <Boton
          texto="3"
          presionar={presionar3}
        />
      </div>
    </div>
  );
}

export default App;
