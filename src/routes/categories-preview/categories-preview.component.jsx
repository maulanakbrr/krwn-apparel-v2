import React, { Fragment, useContext } from "react"
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { CategoriesContext } from "../../contexts/categories.context"

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  
  return (
    <Fragment >
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview title={title} products={products} key={title}/>
          )
        })
      }
    </Fragment>
  )
}

export default CategoriesPreview