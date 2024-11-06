import React from "react"
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import ReachMeOut from "./pages/ReachMeOut"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/reachmeout" element={<ReachMeOut />} />
      </Routes>
    </Router>
  )
}

export default App
