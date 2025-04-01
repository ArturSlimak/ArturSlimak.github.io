import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import AnanauMain from "../../../assets/ananaumain.png"

const AnanauPlatform = () => {
  return (
    <FullpageSection className="vh-100 yellowBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 text-end p-5">
          <h1>Back-End Development for Ananau NGO's CRM System</h1>
          <h4 className="lh-base">
            The CRM system handles volunteer and intern registration, manages
            the library efficiently, and supports QR-scanning for easy check-in
            and check-out.
            <br /> Built with
            <span className="highlight">ASP.NET Core</span>,{" "}
            <span className="highlight">REST API</span>, and{" "}
            <span className="highlight">SQL Database</span> for a secure and
            scalable back-end.
          </h4>
        </div>

        <div className="col-12 col-md-6 p-5">
          <img
            src={AnanauMain}
            alt="Main page of the platform"
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
