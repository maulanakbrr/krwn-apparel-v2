import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartCount } from '../../redux/cart/cartSelector'
import { handleCart } from '../../redux/cart/cartSlice'
import { CartIconContainer, CartItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const toggleCart = () => dispatch(handleCart())

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  )
}

export default CartIcon