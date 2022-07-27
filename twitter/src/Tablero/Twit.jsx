import React from "react";
import Icon from "../Menu/Icon";

function Twit({ ValorNombre, ValorUser, ContenidoTwit, imagen, icon }) {

    return (

        <div className="cont-twit">

            <div className="cont-user">

                <img className="img-user" src={require(`../imagen/${imagen}.jpg`)} />

                <a className="perfil-user" href="Perfil del usuario">{ValorNombre}</a>

                <p className="arroba-user">{ValorUser}</p>

                <Icon
                icon={icon}/>
            </div>


            <div>
                <p className="twit-user">{ContenidoTwit}</p>
            </div>

        </div>


    )
}


export default Twit;



