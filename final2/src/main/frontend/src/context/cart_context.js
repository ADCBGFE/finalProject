import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'
import RentalContext from './rental-context'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } 
  else {
    return [];
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 125,
  bookId: () => {},
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const rentalCtx = useContext(RentalContext);
  const rBookId = rentalCtx.clearBookId;

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (bookId, bookName, amount, product) => {
    dispatch({type: ADD_TO_CART, payload:{bookId, bookName, amount, product}})
  }

  const removeItem = (id) => {
    dispatch({type: REMOVE_CART_ITEM, payload: id})
  }

  const toggleAmount = (id, value) => {
    dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value}})
  }

  const clearCart = () => {
    dispatch({type: CLEAR_CART, payload: rBookId})
  }


  useEffect(() => {
    dispatch({type: COUNT_CART_TOTALS})
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
