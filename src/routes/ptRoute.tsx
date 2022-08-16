import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import TestPage from "../pages/Test"

const PTRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/take-test" element={<TestPage />} />
    </Routes>
  )
}
export default PTRoute
