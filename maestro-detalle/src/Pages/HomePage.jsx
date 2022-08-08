import React from "react";
import Boton from "../componentes/Boton";


function HomePage() {
    return (
        <div className="home-page">

            <h2>¡Bienvenidos a la escuela!</h2>

            <div className="propaganda">

                <img className="img-teach" src="https://images.squarespace-cdn.com/content/v1/53aadf1de4b0a0a817640cca/1603687245319-JCQSOWRFQGEKYM8ZL9AK/capacitaci%C3%B3n+maestros" alt="" Foto-Profes />


                <p> En la escuela de maestros Ofrecemos un espacio público de formación continua para docentes, que depende del Ministerio de Educación del Gobierno de la Ciudad de Buenos Aires.</p>
            </div>

            <div className="presentacion-maestro">

                <h3>Visita la página de tus profesores Favoritos</h3>

                <Boton
                    NombreBoton="Aquí"
                    Ruta="/Master"
                    Clase="btn-maestro"
                />
            </div>


        </div>

    )

}

export default HomePage;