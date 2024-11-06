import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Main
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/reachmeout">
                Reach me out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
