import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { MainRoutes } from "./routes"

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainRoutes />
      </Router>
    </React.Fragment>
  )
}