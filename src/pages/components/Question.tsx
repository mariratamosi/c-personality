import { ReactElement } from "react"
import "./../../styles/components/questions.scss"
import RadioOption from "./Option"

const Question = ({ question }: TypeQuestionProps): JSX.Element => {
  return (
    <div className="que-container">
      <div className="que-text">{question.question}</div>
      <div className="que-answers">
        <form id={`${question.id}_form`}>
          {question.options.map(
            (option: TypeOption, idx): ReactElement => {
              return <RadioOption option={option} idx={idx} qid={question.id} />
            }
          )}
        </form>
      </div>
    </div>
  )
}

export default Question
