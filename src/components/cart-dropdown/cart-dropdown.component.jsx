import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles'

const CartDropdown = () => {
  const { handleCart, cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckout = () => {
    console.log('jaja')
    handleCart()
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
          ))
        }
      </CartItemsContainer>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown