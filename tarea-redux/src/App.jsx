import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useState } from "react"
import Contador from './Components/Contador';



import Boton from './Components/Boton';

function App() {

  const dataVerduras = [
    { id: 1, nombre: "Apio", cantidad: 100 },
    { id: 2, nombre: "Berenjena", cantidad: 64 },
    { id: 3, nombre: "Cebolla", cantidad: 120 },
    { id: 4, nombre: "Calabaza", cantidad: 30 },
    { id: 5, nombre: "Espárrago", cantidad: 64 },
    { id: 6, nombre: "Espinaca", cantidad: 36 },
    { id: 7, nombre: "Hinojo", cantidad: 154 },
    { id: 8, nombre: "Lechuga", cantidad: 163 },
    { id: 9, nombre: "Nabo", cantidad: 45 },
    { id: 10, nombre: "Ortiga", cantidad: 98 },
    { id: 11, nombre: "Rábano", cantidad: 16 },
    { id: 12, nombre: "Soja", cantidad: 3 },
    { id: 13, nombre: "Puerro", cantidad: 13 },
    { id: 14, nombre: "Zanahoria", cantidad: 100 },
    { id: 15, nombre: "Zapallo", cantidad: 50 },

  ]


  const [data, setData] = useState(dataVerduras);

  const [modalInsertar, setModalInsertar] = useState(false);

  const [modalEliminar, setModalEliminar] = useState(false);


  const [verduraSeleccionada, setVerduraSeleccionada] = useState({
    id: '',
    nombre: '',
    cantidad: ''
  })


  const seleccionarVerdura = (elemento, caso) => {
    setVerduraSeleccionada(elemento);
    (caso === 'Eliminar') ? setModalEliminar(true) : setModalEliminar(false)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setVerduraSeleccionada((PrevState) => ({
      ...PrevState,
      [name]: value
    }));
  }

  const eliminar = () => {
    setData(data.filter(pais => pais.id !== verduraSeleccionada.id));
    setModalEliminar(false);
  }

  const insertar = () => {
    var valorInsertar = verduraSeleccionada;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }


  const abrirModalInsertar = () => {
    setVerduraSeleccionada(null);
    setModalInsertar(true)
  }

  return (
    <div className="App">
      <header>
        <p className='title'>Carrito de compras de Verdulerías Siwi's</p> <br />
      </header>


      <button className='btn btn-success'
        onClick={() => abrirModalInsertar()}>
        Agregar verdura al carrito</button>
      <br />
      <br />

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Agregar al carro</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              {/* <td>{elemento.cantidad}</td> */}
              <td><Contador /></td>
              <td className='acciones'>
                <Boton />
              </td>
              <td>   <button className='btn btn-danger' onClick={() => seleccionarVerdura(elemento, 'Eliminar')}>Eliminar</button></td>
              {/* <Counter /> */}
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          <div>¿Estás seguro que deseas eliminar este país? {verduraSeleccionada && verduraSeleccionada.nombre}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-danger'
            onClick={() => eliminar()}>
            Sí
          </button>

          <button className='btn btn-secondary'
            onClick={() => setModalEliminar(false)}>
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agregar Verdura</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <label>ID</label>
            <input
              className='form-control'
              readOnly
              type="text"
              name='id'
              value={data[data.length - 1].id + 1} />
            <br />

            <label>Verdura</label>
            <input
              className='form-control'
              type="text"
              name='nombre'
              value={verduraSeleccionada ?
                verduraSeleccionada.nombre : ''}
              onChange={handleChange}
            />
            <br />

            <label>Cantidad</label>
            <input className='form-control'
              type="text"
              name='cantidad'
              value={verduraSeleccionada ? verduraSeleccionada.cantidad : ''}
              onChange={handleChange} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary'
            onClick={() => insertar()}>
            Insertar
          </button>
          <button className='btn btn-danger'
            onClick={() => setModalInsertar(false)}>Cancelar</button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default App;
