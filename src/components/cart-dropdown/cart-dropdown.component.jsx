import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { handleCart } from '../../redux/cart/cartSlice'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItemsContainer } from './cart-dropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToCheckout = () => {
    console.log('jaja')
    dispatch(handleCart())
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