import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import destinations from "../assets/destinations"

const Header = () => {
  const location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="navbar fixed-top bg-transparent">
      <div className="container-fluid">
        {windowWidth >= 992 ? (
          // Full navbar for large screens (≥ 992px)
          <div className="navbar-expand-lg ms-auto">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item me-1">
                  <Link
                    className={`nav-link ${
                      location.pathname === destinations.main ? "active" : ""
                    }`}
                    to={destinations.main}
                  >
                    Main
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Link
                    className={`nav-link ${
                      location.pathname === destinations.projects
                        ? "active"
                        : ""
                    }`}
                    to={destinations.projects}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item me-1">
                  <Link
                    className={`nav-link ${
                      location.pathname === destinations.reachmeout
                        ? "active"
                        : ""
                    }`}
                    to={destinations.reachmeout}
                  >
                    Reach me out
                  </Link>
                </li>
              </ul>
              <div className="d-flex ms-2 me-2">
                <div className="nav-item">
                  <a
                    className="github-link"
                    href="https://github.com/ArturSlimak"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa-2xl icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Burger button for small screens (< 992px)

          <div className="ms-auto">
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faBars} className="fa-2xl icons" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
