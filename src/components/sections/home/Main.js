import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const Main = () => {
  return (
    <FullpageSection className="d-flex align-items-center justify-content-center vh-100 yellowBg position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Hi, I'm Artur</h1>
            <h4 className="lh-base">
              Motivated back-end developer with a passion for strongly-typed
              languages
            </h4>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <FontAwesomeIcon icon={faChevronDown} className="arrow-icon fs-1 " />
        </div>
      </div>
    </FullpageSection>
  )
}

export default Main
