import React from "react"
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import ReachMeOut from "./pages/ReachMeOut"
import Projects from "./pages/Projects"

import destinations from "./assets/destinations"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={destinations.main} element={<Home />} />
        <Route path={destinations.reachmeout} element={<ReachMeOut />} />
        <Route path={destinations.projects} element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
