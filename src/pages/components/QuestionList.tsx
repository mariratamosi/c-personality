import type { ReactElement } from "react"
import Question from "./Question"

const QuestionList = ({ questionList }: TypeQuestionListProps): JSX.Element => {
  return (
    <div className="App">
      {questionList.map(
        (question: TypeQuestion, idx): ReactElement => {
          return <Question question={question} key={idx} />
        }
      )}
    </div>
  )
}

export default QuestionList
