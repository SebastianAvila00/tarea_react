import React from "react";
import ListaZapatillas from "../Zapatillas.json";
import { useParams } from "react-router-dom"
import CardDetails from "../Components/CardDetails";

function Details() {


    const Params = useParams();
    const idParams = Params.id;


    return (
        <div>
            <div className="cont-card">
                <CardDetails objeto=
                    {ListaZapatillas[idParams - 1]} />
            </div>

        </div >
    )
}

export default Details;