/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFronCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  return { state, addToCart, removeFronCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFronCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFronCart,
      clearCart

    }}>
      {children}
    </CartContext.Provider>

  )
}
