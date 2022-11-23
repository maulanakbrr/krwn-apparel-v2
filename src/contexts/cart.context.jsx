import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  handleCart: () => null
})

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCart = () => {
    setIsCartOpen(!isCartOpen)
    console.log('CART DROPDOWN STATUS:: ', !isCartOpen)
  }

  const value = {
    cartItems,
    isCartOpen,
    handleCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}