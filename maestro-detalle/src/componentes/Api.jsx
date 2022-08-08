import React from "react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function Api() {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const datos = await fetch("https://jsonplaceholder.typicode.com/users")
        const productos = await datos.json();

        setProducto(productos);

    }

    return (

        <div>

            <ul className="cont-api">
                {
                    producto.map(items => (
                        <li className="lista-api" key={items.id}>
                            <Link className="link-name" to={`/user/${items.id}`}>{items.name}</Link>
                        </li>))
                }



            </ul>

        </div>

    )

}


export default Api;