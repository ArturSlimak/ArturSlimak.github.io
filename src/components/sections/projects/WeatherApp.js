import React from "react"
import { FullpageSection } from "@ap.cx/react-fullpage"
import WeatherAppMainimg from "../../../assets/weatherAppMain.png"

const WeatherApp = () => {
  return (
    <FullpageSection className="vh-100 pinkBg d-flex align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-6 text-end p-5">
          <h1>Weather App</h1>
          <h4 className="lh-base">
            The Android app was built using{" "}
            <span className="highlight">Kotlin</span>,{" "}
            <span className="highlight">MVVM</span>, and{" "}
            <span className="highlight">Retrofit</span> <br /> Designed
            following{" "}
            <span className="highlight">Google's Android UI/UX guidelines</span>{" "}
            for a modern and intuitive user experience.
          </h4>

          <h4 className="mt-3 lh-base">
            <a
              href="https://github.com/ArturSlimak/TheWeatherApp2"
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
            src={WeatherAppMainimg}
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

export default WeatherApp
