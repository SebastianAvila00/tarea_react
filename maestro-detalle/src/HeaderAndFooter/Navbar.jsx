import Boton from "../componentes/Boton"


function Navbar() {
    return (
        <div>
            <header>
                <nav>
                    <Boton 
                    Ruta="/"
                    NombreBoton="Inicio"
                    Clase="btn-nav"/>
                </nav>
            </header>

        </div>
    )
}

export default Navbar;