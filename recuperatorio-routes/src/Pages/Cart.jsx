import "../cart.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useState } from "react"


function Cart() {

    const dataPaises = [
        { id: 1, nombre: "Air force one", minutos: 0 },
        { id: 2, nombre: "Air max", minutos: 0 },
        { id: 3, nombre: "Jordan one", minutos: 0 },
        { id: 4, nombre: "Crocs", minutos: 0 },
        { id: 5, nombre: "Zapatos clasico", minutos: 0 },
        { id: 6, nombre: "Converse all star", minutos: 0 },
    ];

    const [data, setData] = useState(dataPaises);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);

    const [paisSeleccionado, setPaisSeleccionado] = useState({
        id: '',
        nombre: '',
        minutos: ''
    });

    const seleccionarPais = (elemento, caso) => {
        setPaisSeleccionado(elemento);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPaisSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }


    const editar = () => {
        var dataNueva = data;
        dataNueva.map(pais => {
            if (pais.id === paisSeleccionado.id) {
                pais.minutos = paisSeleccionado.minutos;
                pais.nombre = paisSeleccionado.nombre;
            }
            return dataNueva;
        });
        setData(dataNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setData(data.filter(pais => pais.id !== paisSeleccionado.id));
        setModalEliminar(false);
    }

    const abrirModalInsertar = () => {
        setPaisSeleccionado(null);
        setModalInsertar(true)
    }

    const insertar = () => {
        var valorInsertar = paisSeleccionado;
        valorInsertar.id = data[data.length - 1].id + 1;
        var dataNueva = data;
        dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
    }

    return (
        <div className="Cart">

            <h2>Tu carrito de compras</h2>
            <br />

            <button className='btn btn-success' onClick={() => abrirModalInsertar()}>Insertar</button>
            <br />
            <br />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento => (
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.minutos}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => seleccionarPais(elemento, 'Eliminar')}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>


            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    <div>
                        ¿Estás seguro que deseas eliminar esta zapatilla? {paisSeleccionado && paisSeleccionado.nombre}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-danger' onClick={() => eliminar()}>
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
                        <h3>Insertar Zapatilla</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className='form-group'>
                        <label>ID</label>
                        <input className='form-control'
                            readOnly
                            type="text"
                            name='id'
                            value={data[data.length - 1].id + 1} />

                        <br />

                        <label>Nombre</label>
                        <input className='form-control'
                            type="text"
                            name='nombre'
                            value={paisSeleccionado ? paisSeleccionado.nombre : ''}
                            onChange={handleChange} />
                        <br />

                        <label>Cantidad</label>
                        <input className='form-control'
                            type="text"
                            name='minutos'
                            value={paisSeleccionado ? paisSeleccionado.minutos : ''}
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
                        onClick={() => setModalInsertar(false)}>
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>


            <h3>Buscá más variedad en <a href="/">Inicio</a></h3>

            <img className="foto-zapa" src="https://i.pinimg.com/originals/cb/3d/ae/cb3dae0b7dc4e07f103bcaa1c60677b1.jpg" alt="" />



        </div >
    );
}

export default Cart;
