import React from "react";
import {connect} from "react-redux";
import {decrement, increment} from "../store/valor/Action"


const mapStateToProps = (state)=>{
    return{
        valor: state.valorReducer.valor,
    };
}

function Boton({increment, decrement}) {
    return (
        <div>
            <button className="btn btn-success btn-accion" onClick={() => increment()}>+</button>
            <button className="btn btn-danger" onClick={() => decrement()}>-</button>
        </div>
    )
}


export default  connect(mapStateToProps,{increment,decrement})(Boton);