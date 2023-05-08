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

    return{
        state,
        addToCart,
    }
}

export default useInitialState;