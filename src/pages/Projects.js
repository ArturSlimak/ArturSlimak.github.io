import TheVerySite from "../components/sections/projects/TheVerySite"

import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage"

import React from "react"

const Projects = () => {
  return (
    <Fullpage>
      <FullPageSections className="container-fluid p-0">
        <TheVerySite />
      </FullPageSections>
    </Fullpage>
  )
}

export default Projects
