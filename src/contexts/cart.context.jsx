import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  handleCart: () => null,
  addItemToCart: () => null,
  totalCount: 0,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  cartTotal:0
})

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    handleTotalCount()
    handleTotalPrice()
  }, [cartItems])

  const handleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const deleteItemFromCart = (itemsToDelete) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== itemsToDelete.id))
  }

  const handleTotalCount = () => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    setTotalCount(total)
  }

  const handleTotalPrice = () => {
    setCartTotal(cartItems.reduce((sum, cartItem) => {
      return sum + (cartItem.price * cartItem.quantity)
    }, 0))
  }

  const value = {
    cartItems,
    isCartOpen,
    handleCart,
    addItemToCart,
    totalCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}