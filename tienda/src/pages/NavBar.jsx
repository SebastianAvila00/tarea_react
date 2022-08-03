import React from "react";
import Boton from "../componentes/Boton";

function NavBar() {
  return (

    <div className="cont-header">

      <header>

        <h1>Verduleria's Siwis</h1>

        <nav>
          <ul className='cont-lista'>

            <Boton
              NombreBoton="Inicio"
              Ruta='/'
            />

          </ul>
        </nav>

      </header>
    </div>
  )
}

export default NavBar