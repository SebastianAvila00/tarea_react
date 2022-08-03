import React from "react";
import Card from "../componentes/Card";
import ListaVerduras from '../Verduras.json';


function HomePage() {
    return(
        <div>
            <h2>Verduras</h2>

            <div className='cont-card'>
                {ListaVerduras.map(verdura => (
                    <Card key={verdura.id} objeto={verdura} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;