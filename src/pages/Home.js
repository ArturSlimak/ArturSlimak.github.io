import Main from "../components/sections/home/Main"
import Skills from "../components/sections/home/Skills"
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage"

import React from "react"

const Home = () => {
  return (
    <Fullpage>
      <FullPageSections className="container-fluid p-0">
        <Main />
        <Skills />
      </FullPageSections>
    </Fullpage>
  )
}

export default Home
