import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className='arrow' onClick={() => removeItemFromCart(cartItem)}>&#60;</span> 
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItemToCart(cartItem)}>&#62;</span>
      </span>
      <span className="price">$ {price}</span>
      <span className="remove-button" onClick={() => deleteItemFromCart(cartItem)}>&#10005;</span>
    </div>
  )
}

export default CheckoutItem