import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import { ProductCardContainer, ProductCardFooter } from './product-card.styles'

const ProductCard = ({product}) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  
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