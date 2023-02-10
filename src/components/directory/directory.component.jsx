import React from "react"
import CategoryItem from "../category-item/category-item.component"
import { DirectoryContainer } from "./directory.styles"

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {
        categories.map((category) => (
          <CategoryItem category={category} key={category.id}/>
        ))
      }
    </DirectoryContainer>
  )
}

export default Directory