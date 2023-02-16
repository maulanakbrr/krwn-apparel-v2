import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/product-card/product-card.component"

import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../redux/categories/categoriesSelector"
import { CategoryShopContainer, CategoryShopTitle } from "./category.styles"

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
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