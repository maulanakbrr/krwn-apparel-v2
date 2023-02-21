import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { selectCategoriesMap, selectIsLoadingCategories } from "../../redux/categories/categoriesSelector"
import Spinner from "../../components/spinner/spinner.component"

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoadingCategories)
  
  return (
    <Fragment >
      {
        !isLoading ? Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview title={title} products={products} key={title}/>
          )
        }) : (
          <Spinner/>
        )
      }
    </Fragment>
  )
}

export default CategoriesPreview