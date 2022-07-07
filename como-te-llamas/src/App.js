import Input from "./componentes/input"
import './App.css';
import { useState } from "react";

function App() {


  const [state, setState] = useState({
    nombre: '',
    apellidos: [
      '',   // Materno
      ''    // Paterno
    ]
  });


  const cambiarValorNombre = (event) => {

    setState({
      nombre: event.target.value,
      apellidos: [
        state.apellidos[0],   // Materno
        state.apellidos[1]    // Paterno
      ]
    })

  };

  const cambiarValorApellido = (event) => {

    if (event.target.id === "2") {
      setState({
        nombre: state.nombre,
        apellidos: [
          event.target.value,   // Materno
          state.apellidos[1]    // Paterno
        ]
      })
    } else {
      setState({
        nombre: state.nombre,
        apellidos: [
          state.apellidos[0],   // Materno
          event.target.value   // Paterno
        ]
      })
    }
  };


  return (
    <div className="App">

      <Input
        valorId="1"
        valorPlaceHolder="Nombre"
        cambiarValor={cambiarValorNombre}

      />

      <Input
        valorId="2"
        valorPlaceHolder="Apellido P"
        cambiarValor={cambiarValorApellido}

      />

      <Input
        valorId="3"
        valorPlaceHolder="Apellido M"
        cambiarValor={cambiarValorApellido}

      />


    <div>Mi nombre es:</div>

      <div className="cont-span">
        <span className="">{state.nombre}</span>
        <span>{state.apellidos[0]}</span>
        <span>{state.apellidos[1]}</span>

      </div>
    </div>
  );
}

export default App;
