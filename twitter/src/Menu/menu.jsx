import React from "react";
import Icon from "./Icon";

function Menu({ nombre, link, icon }) {

    return (
        <li className="lista-menu">

            <a className="link-menu" href={link}>

                <Icon
                icon={icon}
                />

                {nombre}
            </a>

        </li>
    )

}

export default Menu;

