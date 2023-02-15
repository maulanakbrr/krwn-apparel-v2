import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer
  },
})