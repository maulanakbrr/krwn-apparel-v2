import React from 'react'
import { ButtonStyle } from './button.styles'

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <ButtonStyle buttonType={buttonType} {...otherProps}>
      {children}
    </ButtonStyle>
  )
}

export default Button