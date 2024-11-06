import React from "react"
const ReachMeOut = () => {
  return (
    <div className="container-fluid p-0">
      <div className="vh-100 pinkBg d-flex align-items-center scrollChild">
        <div className="row w-100">
          <div className="col-12 col-md-10 offset-md-1 text-end p-5">
            <h1>Feel free to contact me</h1>
            <h4 className="lh-base">
              <a
                href="https://www.linkedin.com/in/artur-slimak"
                target="_blank"
                rel="noopener noreferrer"
                className="links"
              >
                LinkedIn
              </a>
            </h4>
            <h4>
              <a href="mailto:artur_slimak@icloud.com" className="links">
                Email
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReachMeOut
