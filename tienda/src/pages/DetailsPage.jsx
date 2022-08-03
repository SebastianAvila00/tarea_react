import React from "react";
import { useParams } from "react-router-dom";
import CardDetails from "../componentes/CardDetails";
import ListaVerduras from '../Verduras.json';

function DetailsPage() {

    const Params = useParams();
    const idParams = Params.id; //Tiene que tener el mismo nombre que en la ruta  en este caso"id"
    let descripcion = ListaVerduras[idParams -1].descripcion


    return (
        <div>


            <div className="cont-card">


                <CardDetails objeto={ListaVerduras[idParams -1]} />

            </div>

        </div>
    )
}

export default DetailsPage;