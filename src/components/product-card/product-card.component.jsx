import React from 'react'
import Button from '../button/button.component'
import { addItemToCart } from '../../redux/cart/cartSlice.js'
import { useDispatch } from 'react-redux'
import { ProductCardContainer, ProductCardFooter } from './product-card.styles'

const ProductCard = ({product}) => {
  const { name, price, imageUrl } = product
  const dispatch = useDispatch()
  const addProductToCart = () => dispatch(addItemToCart(product))
  
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard