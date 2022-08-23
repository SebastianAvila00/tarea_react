const increment = () =>{
    return{
        type: "INCREMENT_FRUIT",
        payload: +1
    }
}

const decrement = ()=>{
    return{
        type: "DECREMENT_FRUIT",
        payload: -1
    }
}

export {increment, decrement};