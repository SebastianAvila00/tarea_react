import React from "react";

function Input({ }) {

    return (
        <div>

            <div className="cont-terminos">
         
                <input type="checkbox" name="" id="" /> 
                <p>¿Aceptas los términos y condiciones?</p>

            </div>

            <div className="cont-btn">
            <input className="btn" type="submit" value="Registrate" />
            <input className="btn" type="reset" value="Reset" />
            </div>
        </div>
    )
}

export default Input;