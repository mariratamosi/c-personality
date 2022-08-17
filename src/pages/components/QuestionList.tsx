import type { ReactElement } from "react"
import Question from "./Question"

const QuestionList = ({ questionList }: TypeQuestionListProps): JSX.Element => {
  return (
    <div className="App">
      {questionList.map(
        (question: TypeQuestion): ReactElement => {
          return <Question question={question} />
        }
      )}
    </div>
  )
}

export default QuestionList
