import React from "react";
import Icon from "./Icon";


function Formulario({ ValorType, ValorPlaceHolder, TituloInput, icon }) {
    return (

        <form>

            <div>

                <p className="titulo-input">{TituloInput}</p>

                <Icon icon={icon}/>

                <input className="input-form" type={ValorType}
                    placeholder={ValorPlaceHolder}
                />

            </div>


        </form>

    )
};


export default Formulario;

