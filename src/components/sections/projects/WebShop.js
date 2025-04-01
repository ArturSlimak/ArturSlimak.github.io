import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import WebshopAll from "../../../assets/webshop_all.png"
import WebshopCart from "../../../assets/webshop_cart.png"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WebShop = () => {
  return (
    <FullpageSection className="vh-100 pinkBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 p-5">
          <div
            id="slides_carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={WebshopAll}
                  className="img-fluid"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  alt="Webshop example all products overview"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={WebshopCart}
                  className="img-fluid"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  alt="Webshop example cart"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#slides_carousel"
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
              data-bs-target="#slides_carousel"
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
          <h1>
            Small web-shop <br /> for photographic film
          </h1>
          <h4 className="lh-base">
            The webshop includes essential functionality on both the front and
            back end,
            <br /> such as a product overview, type-based filtering, order
            placement,
            <br /> and Firebase-powered authentication.
            <br /> Built with <span className="highlight">React</span>,{" "}
            <span className="highlight">Bootstrap</span>, and custom{" "}
            <span className="highlight">CSS</span>.
          </h4>
        </div>
      </div>
    </FullpageSection>
  )
}

export default WebShop
