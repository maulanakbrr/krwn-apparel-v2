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
        !isLoading ? categoriesMap.map(element => {
          const { title, items } = element
          return (
            <CategoryPreview title={title} products={items} key={title}/>
          )
        }) : (
          <Spinner/>
        )
      }
    </Fragment>
  )
}

export default CategoriesPreview