import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import Svkblazdet from "../../../assets/svkblazdet.png"
import Svkandroid from "../../../assets/svkandroid.png"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SVKPlatform = () => {
  return (
    <FullpageSection className="vh-100 redBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 p-5">
          <div
            id="slides_carousel_svk"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Svkandroid}
                  className="img-fluid"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  alt="Android"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Svkblazdet}
                  className="img-fluid"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  alt="Blazor"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#slides_carousel_svk"
              data-bs-slide="prev"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="fa-2xl"
                aria-hidden="true"
                style={{ color: "black" }}
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#slides_carousel_svk"
              data-bs-slide="next"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fa-2xl"
                style={{ color: "black" }}
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6 text-start p-5">
          <h1>Smart Platform for a Fibre Cement Company</h1>
          <h4 className="lh-base">
            This platform streamlines the management of outsourcing delivery
            teams. Images and data can be captured on Android devices and synced
            instantly with the web interface.
            <br /> Built with <span className="highlight">Spring Boot 3.x</span>
            , <span className="highlight">Spring WebFlux</span>,{" "}
            <span className="highlight">Hibernate ORM</span>,{" "}
            <span className="highlight">PostgreSQL</span>, and{" "}
            <span className="highlight">Let's Encrypt</span>, ensuring a modern,
            scalable, and secure solution.
          </h4>
        </div>
      </div>
    </FullpageSection>
  )
}

export default SVKPlatform
