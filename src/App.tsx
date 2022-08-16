import React from "react"
import PTRoute from "./routes/ptRoute"
import Nav from "./pages/Nav"
import "./styles/main.scss"

function App() {
  return (
    <div className="App">
      <Nav />
      <PTRoute />
    </div>
  )
}

export default App
