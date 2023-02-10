import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CheckoutItemContainer, CheckoutItemImageContainer } from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className='arrow' onClick={() => removeItemFromCart(cartItem)}>&#60;</span> 
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItemToCart(cartItem)}>&#62;</span>
      </span>
      <span className="price">$ {price}</span>
      <span className="remove-button" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</span>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem