import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import AnanauMain from "../../../assets/ananaumain.png"

const AnanauPlatform = () => {
  return (
    <FullpageSection className="vh-100 yellowBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 text-end p-5">
          <h1>Back-End Platform for Ananau NGO's CRM</h1>
          <h4 className="lh-base">
            This CRM manages volunteer and intern registration, organizes the
            library, and enables QR-based check-ins/check-outs efficiently.
            <br /> Built with <span className="highlight">Spring Boot 3.x</span>
            , <span className="highlight">Spring WebFlux & REST API</span>, and{" "}
            <span className="highlight">PostgreSQL</span>, providing a secure,
            scalable, and maintainable back-end.
          </h4>
        </div>

        <div className="col-12 col-md-6 p-5">
          <img
            src={AnanauMain}
            alt="Main page of Ananau CRM platform"
            className="img-fluid"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </FullpageSection>
  )
}

export default AnanauPlatform
