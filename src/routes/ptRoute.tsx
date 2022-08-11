import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import TestPage from "../components/Test"

const PTRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/take-test" element={<TestPage />} />
    </Routes>
  )
}
export default PTRoute
