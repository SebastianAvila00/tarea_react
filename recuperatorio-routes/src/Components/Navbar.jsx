import React from "react";

function Navbar() {
    return (
        <div className="cont-header">
            <nav>
                <div><h2 className="logo">Zapateria's Siwi</h2>
                </div>

                <div className="cont-input">
                    <input className="buscador" type="search" placeholder="Busca tu calzado favorito" />
                </div>
            </nav>


        </div>
    )
}

export default Navbar;