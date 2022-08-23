
const initialState = {
    valor: 0,
};

export default (state = initialState, action) => {
    if (action.type === "INCREMENT_FRUIT"){
        return {
            ...state,
            valor: state.valor + 1
        };
    }

    if (action.type === "DECREMENT_FRUIT"){
        return {
            ...state,
            valor: state.valor - 1
        };
    }
    return state;
}