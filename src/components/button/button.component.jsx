import React from 'react'
import { ButtonStyle, ButtonSpinner } from './button.styles'

const Button = ({children, buttonType, isLoading=false, ...otherProps}) => {
  return (
    <ButtonStyle disabled={isLoading} buttonType={buttonType} {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children}
    </ButtonStyle>
  )
}

export default Button