import React from 'react'
import { Link } from 'react-router-dom'
import './category-item.styles.scss'

const CategoryItem = ({category: {imageUrl, title}}) => {
  return (
    <div className="category-container">
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  )
}

export default CategoryItem