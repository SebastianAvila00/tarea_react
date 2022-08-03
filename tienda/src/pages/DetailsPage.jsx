import React from "react";
import CardDetails from "../componentes/CardDetails";
import ListaVerduras from '../Verduras.json';

function DetailsPage() {
    return (
        <div>


            <div className="cont-card">

                {ListaVerduras.map(verdura => (
                <CardDetails key={verdura.id} objeto={verdura} />))}

            </div>

        </div>
    )
}

export default DetailsPage;