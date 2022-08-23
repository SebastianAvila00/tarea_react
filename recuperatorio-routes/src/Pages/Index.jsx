import React from "react";
import Card from "../Components/Card";
import ListaZapatillas from "../Zapatillas.json"

function Index() {
    return (
        <div>

            <div className="img-cartel">
                <div className="frase">Una nueva historia para cada zapato</div>
            </div>

            <p className="presentacion">Productos</p>


            <div className="cont-card">
                {ListaZapatillas.map(zapatilla => (<Card key={zapatilla.id}
                 objeto={zapatilla} />
                ))}
            </div>
        </div>
    )
}

export default Index;