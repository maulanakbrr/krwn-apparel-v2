import ProductCard from "../product-card/product-card.component"
import { CategoryPreviewContainer, Preview, CategoryPreviewTitle } from "./category-preview.styles"

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={`/shop/${title}`} className="title">{title.toUpperCase()}</CategoryPreviewTitle>
      </h2>

      <Preview>
        {
          products.filter((_, idx) => idx < 4).map(product => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview