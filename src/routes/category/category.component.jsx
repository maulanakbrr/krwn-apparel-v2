import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/product-card/product-card.component"

import {CategoriesContext } from "../../contexts/categories.context"
import './category.styles.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  console.log('PRODUCTS', categoriesMap[category])

  return (
    <div className="category-shop-container">
      {
        products && products.map(product => <ProductCard key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Category