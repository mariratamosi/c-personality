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
        {option.answer}
      </label>
    </div>
  )
}

export default RadioOption
