import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
const Main = () => {
  return (
    <FullpageSection className="d-flex align-items-center justify-content-center vh-100 yellowBg">
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
      </div>
    </FullpageSection>
  )
}

export default Main
