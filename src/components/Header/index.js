import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <div className="header-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
          className="website-header-logo"
        />
      </div>
      <div className="header-elements">
        <FaMoon
          className="darkModeIcon"
          style={{width: 32, height: 40, marginRight: 10}}
        />
        <CgProfile className="profileIcon" style={{width: 32, height: 40}} />
        <button type="button" onClick={onClickLogout} className="button-logout">
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
