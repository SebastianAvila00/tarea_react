
import { increment, decrement } from "../store/valor/Action";

import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return{
        valor: state.valorReducer.valor,
    };
}

const Contador = ({valor,})=>{
    return(
        <div>
            <p className="valor">{valor}</p>
        </div>
    );
};


export default  connect(mapStateToProps,{increment,decrement})(Contador);