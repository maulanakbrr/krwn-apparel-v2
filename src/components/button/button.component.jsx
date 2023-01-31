import './button.styles.scss'
import { ButtonStyle } from './button.styles'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    // <button 
    //   className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
    //   {...otherProps}
    // >
    //   {children}
    // </button>

    <ButtonStyle buttonType={buttonType}>
      {children}
    </ButtonStyle>
  )
}

export default Button