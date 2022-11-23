import { Fragment, useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as KrwnLogo } from '../../assets/krown.svg'
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
  const signOutHandler = async () => {
    const res = await signOutUser()
    console.log('RES: ', res)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <KrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon onClick={() => console.log('asdasd')}/>
        </div>
        {
          isCartOpen && <CartDropdown/>
        }
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation