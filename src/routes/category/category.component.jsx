import React, { useContext, useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/product-card/product-card.component"

import {CategoriesContext } from "../../contexts/categories.context"
import { CategoryShopContainer, CategoryShopTitle } from "./category.styles"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  console.log('PRODUCTS', categoriesMap[category])

  return (
    <Fragment>
      <CategoryShopTitle>{category.toUpperCase()}</CategoryShopTitle>
      <CategoryShopContainer>
        {
          products && products.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </CategoryShopContainer>
    </Fragment>
  )
}

export default Category