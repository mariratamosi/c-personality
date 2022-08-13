import "../styles/components/nav.scss"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="pt-nav">
      <div>
        <Link to="/" className="pt-logo-text">
          <img src={logo} alt="pt logo" className="nav-logo" />
          <span className="nav-brand-name">
            <span>C-</span>
            <span>Personality</span>
          </span>
        </Link>
      </div>
      <div>
        <Link to="/take-test" className="cp-btn cp-large-btn">
          Take the test
        </Link>
      </div>
    </div>
  )
}

export default Nav
