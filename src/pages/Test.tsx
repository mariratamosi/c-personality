import { useEffect } from "react"
import "../styles/components/testPage.scss"
import PageTop from "./components/PageTop"

function TestPage() {
  useEffect(() => {
    /*
    Query logic
    */
    console.log("i fire once")
  }, [])
  return (
    <div className="test pt-page">
      <PageTop />
      <div className="questionnaire">Questions</div>
    </div>
  )
}

export default TestPage
