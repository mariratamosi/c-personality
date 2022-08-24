const RadioOption = ({ option, idx, qid }: TypeOptionProps): JSX.Element => {
  return (
    <div>
      <input
        type="radio"
        value={option.weight}
        name={`${qid}_answer`}
        id={`${qid}_answer_${idx}`}
      />
      <label htmlFor={`${qid}_answer_${idx}`} className="input-label">
        {idx + 1}) {option.answer}
      </label>
    </div>
  )
}

export default RadioOption
