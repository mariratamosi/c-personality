import { useEffect, useState } from "react"
import "../styles/components/testPage.scss"
import PageTop from "./components/PageTop"
import QuestionList from "./components/QuestionList"

function TestPage() {
  const [questionList, setQuestionList] = useState<TypeQuestionList>(
    [] as TypeQuestionList
  )

  useEffect(() => {
    /*
    Query logic
    
    */
    console.log("i fire once")
    let data: TypeQuestionList = [
      {
        id: 453456,
        question: "what do you do in your free time?",
        options: [
          {
            weight: 0.25,
            answer: "nothing",
          },
          {
            weight: 0.5,
            answer: "something",
          },
          {
            weight: 0.75,
            answer: "manything",
          },
          {
            weight: 1.0,
            answer: "manything",
          },
        ],
      },
      {
        id: "random_string",
        question: "what is it that bothers you about people?",
        options: [
          {
            weight: 0.25,
            answer: "Boring",
          },
          {
            weight: 0.5,
            answer: "Damn care",
          },
          {
            weight: 0.75,
            answer: "Intelligent",
          },
          {
            weight: 1,
            answer: "Ambigous",
          },
        ],
      },
    ]
  }, [])
  return (
    <div className="test pt-page">
      <PageTop />
      <QuestionList questionList={questionList} />
      {/*         <QuestionList questionList={questionList} />
       */}
    </div>
  )
}

export default TestPage
