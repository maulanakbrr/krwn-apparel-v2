import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryItemContainer } from './category-item.styles'

const CategoryItem = ({category: {imageUrl, title}}) => {
  return (
    <CategoryItemContainer>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>
          <p>Shop Now</p>
        </Link>
      </div>
    </CategoryItemContainer>
  )
}

export default CategoryItem