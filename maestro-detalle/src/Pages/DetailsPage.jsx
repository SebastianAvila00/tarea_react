import React from "react";
import Boton from "../componentes/Boton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


function DetailsPage() {

    const Params = useParams();
    const idParams = Params.id;

    const [user, setUser] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const datos = await fetch(`https://jsonplaceholder.typicode.com/users/${idParams}`)
        const users = await datos.json();

        setUser(users);
    }

    return (

        <div>

            <Boton
                Ruta="/master"
                NombreBoton="Volver"
                Clase="btn-maestro"
            />

            <h2>Datos del profesor</h2>

            <div className="cont-details">
                <div className="cont-p">
                    <p> {user.id} </p>
                    <p> {user.name}</p>
                    <p> {user.email}</p>
                </div>
            </div>

            <h2>No dudes en mandarles un mail</h2>

        </div>
    )


}



export default DetailsPage;