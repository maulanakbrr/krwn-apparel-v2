import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart/cartSlice'
import categoriesReducer from './categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    categories: categoriesReducer
  },
})