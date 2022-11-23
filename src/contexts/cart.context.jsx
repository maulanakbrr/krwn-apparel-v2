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

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  handleCart: () => null,
  addItemToCart: () => null
})

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    handleTotalCount()
    console.log('works')
  }, [cartItems])

  const handleCart = () => {
    setIsCartOpen(!isCartOpen)
    console.log('CART DROPDOWN STATUS:: ', !isCartOpen)
  }

  const addItemToCart = (productToAdd) => {
    console.log('AAAA:: ', productToAdd)
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const handleTotalCount = () => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    setTotalCount(total)
  }

  const value = {
    cartItems,
    isCartOpen,
    handleCart,
    addItemToCart,
    totalCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}