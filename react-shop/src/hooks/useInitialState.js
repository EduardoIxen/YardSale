import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => { //payload es el producto que se va a agregar al carrito
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = payload => {  //recibe el producto que se va a eliminar
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id) //filtra los productos que no sean iguales al que se va a eliminar
        });
    }

    return{
        state,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;