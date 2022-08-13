import { useEffect } from "react"
import "../styles/components/testPage.scss"

function TestPage() {
  useEffect(() => {
    /*
    Query logic
    */
    console.log("i fire once")
  }, [])
  return <div className="test pt-page">Test</div>
}

export default TestPage
