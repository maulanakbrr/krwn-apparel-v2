import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/product-card/product-card.component"

import { useSelector } from "react-redux"
import { selectCategoriesMap, selectIsLoadingCategories } from "../../redux/categories/categoriesSelector"
import { CategoryShopContainer, CategoryShopTitle } from "./category.styles"
import Spinner from "../../components/spinner/spinner.component"

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoadingCategories)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  console.log('PRODUCTS', categoriesMap[category])

  return (
    <Fragment>
      { 
        !isLoading ? (
          <>
            <CategoryShopTitle>{category.toUpperCase()}</CategoryShopTitle>
            <CategoryShopContainer>
              {
                products && products.map(product => <ProductCard key={product.id} product={product}/>)
              }
            </CategoryShopContainer>
          </>
        ) : (
          <Spinner/>
        )
      }
      
    </Fragment>
  )
}

export default Category