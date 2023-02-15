import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector'
import { CheckoutContainer, CheckoutHeader, CheckoutTotal } from './checkout.styles'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>

      {
        cartItems.length > 0 ? cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )) : (
          <h3>There is no item in here</h3>
        )
      }

      <CheckoutTotal>Total: $ {cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  )
}

export default Checkout