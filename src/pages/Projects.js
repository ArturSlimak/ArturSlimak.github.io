import TheVerySite from "../components/sections/projects/TheVerySite"
import WebShop from "../components/sections/projects/WebShop"
import AnanauPlatform from "../components/sections/projects/AnanauPlatform"
import SVKPlatform from "../components/sections/projects/SVKPlatform"
import WeatherApp from "../components/sections/projects/WeatherApp"

import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage"

import React from "react"

const Projects = () => {
  return (
    <Fullpage>
      <FullPageSections className="container-fluid p-0">
        <TheVerySite />
        <WebShop />
        <AnanauPlatform />
        <SVKPlatform />
        <WeatherApp />
      </FullPageSections>
    </Fullpage>
  )
}

export default Projects
