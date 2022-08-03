import React from "react";
import Boton from "../componentes/Boton";
import Formulario from "../componentes/Formulario";


function Cart() {
    return (

        <div className="formulario">


            <h2>Registrate para poder realizar la compra</h2>

            <div className="cont-form">
                <Formulario
                    icon="fa-user"
                    TituloInput="Nombre"
                    ValorPlaceHolder="Nombre"
                    ValorType="text" />

                <Formulario
                    icon="fa-user-large"
                    TituloInput="Apellido"
                    ValorPlaceHolder="Apellido"
                    ValorType="text" />

                <Formulario

                    TituloInput="N° Documento"
                    ValorPlaceHolder="N° Documento"
                    ValorType="number" />

                <Formulario
                    icon="fa-user-large"
                    TituloInput="Email"
                    ValorPlaceHolder="Email"
                    ValorType="email" />

                <Formulario
                    icon="fa-user-large"
                    TituloInput="Contraseña"
                    ValorPlaceHolder="Contraseña"
                    ValorType="password" />
                <Formulario
                    icon="fa-user-large"
                    TituloInput="Repetir Contraseña"
                    ValorPlaceHolder="Repetir Contraseña"
                    ValorType="password" />

                <Boton
                    Ruta=""
                    NombreBoton="Registrarse" />
            </div>

            <div>
            

                <Boton
                    Ruta='/'
                    NombreBoton="Checkout" />


            </div>





        </div>
    )
}
export default Cart;