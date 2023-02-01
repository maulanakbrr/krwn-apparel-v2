import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, CartItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const { handleCart, totalCount } = useContext(CartContext)

  return (
    <CartIconContainer onClick={handleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <CartItemCount>{totalCount}</CartItemCount>
    </CartIconContainer>
  )
}

export default CartIcon