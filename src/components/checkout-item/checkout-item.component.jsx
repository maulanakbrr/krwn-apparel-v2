import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from '../../redux/cart/cartSlice'
import { CheckoutItemContainer, CheckoutItemImageContainer } from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className='arrow' onClick={() => dispatch(removeItemFromCart(cartItem))}>&#60;</span> 
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => dispatch(addItemToCart(cartItem))}>&#62;</span>
      </span>
      <span className="price">$ {price}</span>
      <span className="remove-button" onClick={() => dispatch(deleteItemFromCart(cartItem))}>&#10005;</span>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem