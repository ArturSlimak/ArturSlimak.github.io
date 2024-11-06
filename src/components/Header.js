import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-1">
              <Link className="nav-link active" to="/">
                Main
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link active" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link active" to="/reachmeout">
                Reach me out
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-2 me-2">
            <div className="nav-item">
              <a className="github-link" href="https://github.com/ArturSlimak">
                <FontAwesomeIcon icon={faGithub} className="fa-2xl icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
