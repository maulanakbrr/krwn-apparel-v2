import React, { Fragment, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as KrwnLogo } from '../../assets/krown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../contexts/user.context"
import { selectIsCartOpen } from "../../redux/cart/cartSelector"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { NavigationContainer, NavigationLinksContainer, NavigationLogoContainer } from "./navigation.styles"
import { selectCurrentUser } from "../../redux/user/userSelector"
import { setUser } from "../../redux/user/userSlice"

const Navigation = () => {
  // const { currentUser } = useContext(UserContext)
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  
  const signOutHandler = async () => {
    const res = await signOutUser()
    dispatch(setUser(null))
    console.log('RES: ', res)
  }

  return (
    <Fragment>
      <NavigationContainer>
        <NavigationLogoContainer to='/'>
          <KrwnLogo className="logo"/>
        </NavigationLogoContainer>
        <NavigationLinksContainer>
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
        </NavigationLinksContainer>
        {
          isCartOpen && <CartDropdown/>
        }
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation