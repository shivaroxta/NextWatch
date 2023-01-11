import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Sidebar = () => (
  <div className="filter-groups">
    <div className="filter">
      <Link to="/">
        <div className="icon">
          <p>
            <AiFillHome style={{marginLeft: '5'}} />
          </p>
          <p className="item" style={{fontSize: '15px'}}>
            Home
          </p>
        </div>
      </Link>
      <Link to="/trending">
        <div className="icon">
          <p>
            <HiFire style={{marginRight: '5', marginLeft: '5'}} />
          </p>
          <p className="item" style={{fontSize: '15px'}}>
            Trending
          </p>
        </div>
      </Link>
      <Link to="/gaming">
        <div className="icon">
          <p>
            <SiYoutubegaming style={{marginRight: '5', marginLeft: '5'}} />
          </p>
          <p className="item" style={{fontSize: '15px'}}>
            Gaming
          </p>
        </div>
      </Link>

      <Link to="/saved">
        <div className="icon">
          <p>
            <MdPlaylistAdd style={{marginRight: '5', marginLeft: '5'}} />
          </p>
          <p className="item" style={{fontSize: '15px'}}>
            Saved Videos
          </p>
        </div>
      </Link>
    </div>
    <div className="contact">
      <h1 className="contact-us">CONTACT US</h1> <br />
      <div className="sites">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          className="fb site"
          alt="facebook"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          className="tw site"
          alt="twitter"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          className="ln site"
          alt="linkdn"
        />
      </div>
    </div>
  </div>
)

export default Sidebar
