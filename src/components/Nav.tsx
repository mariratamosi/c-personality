import "../styles/components/nav.scss"
import logo from "../assets/logo.png"

function Nav() {
  return (
    <div className="pt-nav">
      <div>
        <a href="/" className="pt-logo-text">
          <img src={logo} alt="pt logo" className="nav-logo" />
          <span className="nav-brand-name">
            <span>C-</span>
            <span>Personality</span>
          </span>
        </a>
      </div>
      <div>
        <a href="/take-test" className="cp-btn cp-large-btn">
          Take the test
        </a>
      </div>
    </div>
  )
}

export default Nav
