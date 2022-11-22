import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { ReactComponent as KrwnLogo } from '../../assets/krown.svg'
import { UserContext } from "../../contexts/user.context"
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  
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
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation