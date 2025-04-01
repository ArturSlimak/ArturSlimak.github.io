import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import TheVerySiteImg from "../../../assets/home.png"

const TheVerySite = () => {
  return (
    <FullpageSection className="vh-100 blueBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 text-end p-5">
          <h1>The Very Site</h1>
          <h4 className="lh-base">
            The site was built using <span className="highlight">React</span>,{" "}
            <span className="highlight">Bootstrap</span>, <br />
            custom <span className="highlight">CSS</span>, and published on{" "}
            <span className="highlight">Github</span> pages
          </h4>
          <h4 className="mt-3 lh-base">
            <a
              href="https://github.com/arturslimak/arturslimak.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              Link to github
            </a>
          </h4>
        </div>

        <div className="col-12 col-md-6 p-5">
          <img
            src={TheVerySiteImg}
            alt="The Very Site"
            className="img-fluid"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </FullpageSection>
  )
}

export default TheVerySite
