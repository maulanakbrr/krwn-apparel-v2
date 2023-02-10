import React from "react"
import { CartItemContainer, CartItemDetail } from "./cart-item.styles"

const CartItem = ({cartItem}) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetail>
        <span className="name">{name}</span>
        <span className="price">{quantity} x {price}</span>
      </CartItemDetail>
    </CartItemContainer>
  )
}

export default CartItem