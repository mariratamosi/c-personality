import type { ReactElement } from "react"

const QuestionList = ({ questionList }: TypeQuestionListProps): JSX.Element => {
  return (
    <div className="App">
      {questionList.map(
        (que: TypeQuestion): ReactElement => {
          return <div>{que.question}</div>
        }
      )}
    </div>
  )
}

export default QuestionList
