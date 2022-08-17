import { ReactElement } from "react"

const Question = ({ question }: TypeQuestionProps): JSX.Element => {
  return (
    <div className="que-container">
      <div className="que-text">{question.question}</div>
      <div className="que-answers">
        <form id={`${question.id}_form`}>
          {question.options.map(
            (option: TypeOption, idx): ReactElement => {
              return (
                <div>
                  <label
                    htmlFor={`${question.id}_answer_${idx}`}
                    className="input-label"
                  >
                    <input
                      type="radio"
                      value={option.weight}
                      name={`${question.id}_answer_${idx}`}
                      id={`${question.id}_answer_${idx}`}
                    />
                    <span> {option.answer}</span>
                  </label>
                </div>
              )
            }
          )}
        </form>
      </div>
    </div>
  )
}

export default Question
