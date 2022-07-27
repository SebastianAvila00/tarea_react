// Inicio Importaciones de Menu
import Menu from "./Menu/menu"
import Boton from './Menu/botones';
// Fin Importaciones de Menu

// Inicio Importaciones de Tablero
import Icon from "./Menu/Icon";
import Twit from "./Tablero/Twit";
// Fin Importaciones de Tablero

// Inicio Importaciones de Tendencia
import Sugerencias from "./sugerencias/sugerencias";
import Seguir from "./sugerencias/seguir";
// Fin Importaciones de Tendencia

import './App.css';




function App() {
  return (
    <div className="App">

      {/* Inicio Menu */}

      <div className='menu'>

        <img className='logo-twitter' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/768px-Twitter-logo.svg.png" alt="Logo-twitter"></img>

        <ul>

          <Menu
            icon="fa-house-chimney icon-menu"
            nombre="Inicio"
            link="https://es-la.facebook.com/"
          />

          <Menu
            icon="fa-hashtag icon-menu"
            nombre="Explorar"
            link=""
          />

          <Menu
            icon="fa-bell icon-menu"
            nombre="Notificaciones"
            link=""
          />

          <Menu
            icon="fa-message icon-menu"
            nombre="Mensajes"
            link=""
          />

          <Menu
            icon="fa-bookmark icon-menu"
            nombre="Guardados"
            link=""
          />

          <Menu
            icon="fa-rectangle-list icon-menu"
            nombre="Listas"
            link=""
          />

          <Menu
            icon="fa-user icon-menu"
            nombre="Perfil"
            link=""
          />

          <Menu
            icon="fa-ellipsis icon-menu"
            nombre="Más opciones"
            link=""
          />

          <Boton
            nombre="Twittear" />

        </ul>

        <div className='cont-user'>

          <img className='foto-perfil' src={require("./imagen/foto-perfil.jpg")} alt="foto-perfil" />

          <div className='cont-name'>
            <p className='name'>Sebastián Avila</p>
            <p className='arroba'>@Sebaeze00</p>
          </div>

          <i className="fa-solid fa-ellipsis punto"></i>

        </div>
      </div>
      {/* Fin Menu */}




      {/* Inicio Tablero */}

      <div className='tablero'>

        <div className='mi-twit'>
          <p className='text-inicio'>Inicio</p>


          <div className='cont-text-twit'>
            <img className='foto-mi-twit' src={require("./imagen/foto-perfil.jpg")} alt="foto-perfil" />

            <div className='text-tweet' contentEditable></div>
          </div>


          <div className='footer-mi-twit'>

            <Icon
              icon="fa-image icons-mi-twit"
              link=""
            />

            <Icon
              icon="fa-brands fa-git-square icons-mi-twit"
              link=""
            />

            <Icon
              icon="fa-square-poll-horizontal icons-mi-twit"
              link=""
            />

            <Icon
              icon="fa-face-smile icons-mi-twit"

              link=""
            />

            <Icon
              icon="fa-calendar icons-mi-twit"
              link=""
            />

            <Icon
              icon="fa-location-dot icons-mi-twit"
              link=""
            />

            <Boton
              nombre="Twittear-mini"
            />
          </div>

          <hr></hr>

        </div>

        <Icon
          icon="fa-ellipsis puntitos-user"
        />

        <Twit
          ValorNombre="Sebastian Avila"
          ValorUser="@Sebaeze00  -  23 jul."
          ContenidoTwit="Hola mucho gusto me llamo Sebastian y este es Mi primer Twit"
          imagen="foto-perfil"
        />

        <div className="cont-footer-twit">

          <Icon
            icon="fa-comment  icon-footer-user"
          />

          <Icon
            icon="fa-retweet icon-footer-user"
          />

          <Icon
            icon="fa-heart  icon-footer-user"
          />

          <Icon
            icon="fa-arrow-up-from-bracket icon-footer-user"
          />
        </div>

        <hr></hr>


        <Icon
          icon="fa-ellipsis puntitos-user"
        />

        <Twit
          ValorNombre="Sebastian Avila"
          ValorUser="@Sebaeze00  -  8h."
          ContenidoTwit="Tenemos turnos nuevos para el mes de Agosto todo esto lo puedes ver en la página oficial de la empresa. Muchisimas gracias."
          imagen="foto-perfil"
        />

        <div className="cont-footer-twit">

          <Icon
            icon="fa-comment  icon-footer-user"
          />

          <Icon
            icon="fa-retweet icon-footer-user"
          />

          <Icon
            icon="fa-heart  icon-footer-user"
          />

          <Icon
            icon="fa-arrow-up-from-bracket icon-footer-user"
          />
        </div>

        <hr></hr>


        <Icon
          icon="fa-ellipsis puntitos-user"
        />

        <Twit
          ValorNombre="Sebastian Avila"
          ValorUser="@Sebaeze00  -  3 min."
          ContenidoTwit="Tenemos turnos nuevos para el mes de Agosto todo esto lo puedes ver en la página oficial de la empresa. Muchisimas gracias."
          imagen="foto-perfil"
        />

        <div className="cont-footer-twit">

          <Icon
            icon="fa-comment  icon-footer-user"
          />

          <Icon
            icon="fa-retweet icon-footer-user"
          />

          <Icon
            icon="fa-heart  icon-footer-user"
          />

          <Icon
            icon="fa-arrow-up-from-bracket icon-footer-user"
          />
        </div>

        <hr></hr>

      </div>

      {/* Fin Tablero */}

      {/* Inicio sugerencias */}

      <div className="sugerencias">


        <div className="cont-input">

          <Icon
            icon="fa-magnifying-glass" />


          <input className="input-search" placeholder="Buscar en Twitter" type="search"></input>
        </div>

        <div className="cont-tendencias">
          <p className="que-pasa">
            Qué está pasando
          </p>


          <Sugerencias
            tendencia="Tendencia en Argentina"
            contenido="US$200"
            vistas="21,2 mil Tweets" />

          <Sugerencias
            tendencia="Politica Tendencia"
            contenido="Milei"
            vistas="7.509 Tweets" />

          <Sugerencias
            tendencia="Deportes - Tendencia"
            contenido="Huracán"
            vistas="38,5 mil Tweets" />

          <Sugerencias
            tendencia="Guerra en Ucrania ° EN DIRECTO"
            contenido="Sigue los últimos detalles del ataque a Ucrania"
            vistas="" />

          <p className="mas-sugerencia">Mostras más</p>
        </div>

        <div className="cont-quien-seguir">

          <p className="que-pasa">
            A quién seguir
          </p>

          <div className="cont-seguir">
            <Seguir
              imagen="lauti.jpg"
              nombreSeguir="Lautaro Acosta"
              arrobaSeguir="@LautiAco" />

            <Boton
              nombre="Seguir" />

          </div>

          <div className="cont-seguir">
            <Seguir
              imagen="lauti.jpg"
              nombreSeguir="Lautaro Acosta"
              arrobaSeguir="@LautiAco" />

            <Boton
              nombre="Seguir" />

          </div>



        </div>



      </div>

    </div>
  );
}

export default App;
