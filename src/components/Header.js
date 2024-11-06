import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import destinations from "../assets/destinations"

const Header = () => {
  const location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const lgScreenBreakPoint = 992
  const [isSliderOpen, setIsSliderOpen] = useState(false)

  const toggleDropdown = () => {
    setIsSliderOpen(!isSliderOpen)
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {windowWidth >= lgScreenBreakPoint ? (
        <nav className="navbar fixed-top bg-transparent">
          <div className="container-fluid">
            <div className="navbar-expand-lg ms-auto">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl icons"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar fixed-top bg-transparent">
          <div className="container-fluid">
            <div className="ms-auto mt-3">
              <button onClick={toggleDropdown} className="toggleBtn">
                <FontAwesomeIcon
                  icon={isSliderOpen ? faTimes : faBars}
                  className="fa-2xl mobIcons"
                />
              </button>
            </div>
          </div>
          {/* Add the 'open' class conditionally based on `isSliderOpen` */}
          <div className={`mobileNav ${isSliderOpen ? "open" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === destinations.main ? "active" : ""
                  }`}
                  to={destinations.main}
                  onClick={toggleDropdown}
                >
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === destinations.projects ? "active" : ""
                  }`}
                  to={destinations.projects}
                  onClick={toggleDropdown}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === destinations.reachmeout
                      ? "active"
                      : ""
                  }`}
                  to={destinations.reachmeout}
                  onClick={toggleDropdown}
                >
                  Reach me out
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="github-link"
                  href="https://github.com/ArturSlimak"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleDropdown}
                >
                  <FontAwesomeIcon icon={faGithub} className="fa-2xl icons" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}

export default Header
