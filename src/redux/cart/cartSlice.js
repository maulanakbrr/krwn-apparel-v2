import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  isCartOpen: false,
  totalCount: 0,
  cartTotal:0
}

const addCartItem = (cartItems, productToAdd) => {
  let newCartItem
  const isCartItem = cartItems.find((item) => item.id === productToAdd.id)
  console.log('same? ', isCartItem)

  if (isCartItem) {
    newCartItem = cartItems.map(item => {
      if (item.id === productToAdd.id){
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
  } else {
    newCartItem = [...cartItems, {...productToAdd, quantity: 1}]
  }

  return newCartItem
}

const removeCartItem = (cartItems, itemToRemove) => {
  const isCartItem = cartItems.find((item) => item.id === itemToRemove.id && item.quantity > 1)

  if (isCartItem) {
    return cartItems.map(cartItem => cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
  }

  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
      console.log('fired!', state.isCartOpen)
    },
    addItemToCart: (state, action) => {
      console.log('ADDCART:: ', action)
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    deleteItemFromCart: (state, action) => {
      console.log('DELECARTITEM:: ', action)
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    }
  },
})


export const { handleCart, addItemToCart, removeItemFromCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer