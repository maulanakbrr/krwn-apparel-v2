import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const { handleCart, totalCount } = useContext(CartContext)

  return (
    <div className='cart-icon-container' onClick={handleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{totalCount}</span>
    </div>
  )
}

export default CartIcon