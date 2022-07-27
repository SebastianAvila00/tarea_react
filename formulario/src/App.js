import Formulario from './componentes/formulario';
import Input from './componentes/input';
import Icon from './componentes/icons';
import './App.css';

function App() {
  return (
    <div className="App">


      <div className='cont-form'>



        <Formulario
          icon="fa-user-large"
          ValorType="text"
          ValorPlaceHolder="Nombre"
          TituloInput="Nombre:" />

        <Formulario
          icon="fa-user-large"
          type="text"
          ValorPlaceHolder="Apellido"
          TituloInput="Apellido:" />

        <Formulario
          icon="fa-at"
          type="email"
          ValorPlaceHolder="Email"
          TituloInput="Email:" />

        <Formulario
          icon="fa-lock"
          type="password"
          ValorPlaceHolder="Contraseña"
          TituloInput="Contraseña:" />

        <Formulario
          icon="fa-lock"
          type="password"
          ValorPlaceHolder="Repetir contraseña"
          TituloInput="Repetir Contraseña:" />

        <Input />

      </div>



    </div>
  );
}

export default App;
