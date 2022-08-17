declare module "*.jpg"
declare module "*.png"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.svg"

type TypeQuestion = {
  id: string | number
  question: string
  options: TypeOption[]
}

type TypeOption = {
  weight: number
  answer: string
}
type TypeQuestionList = TypeQuestion[]

type TypeQuestionListProps = {
  questionList: TypeQuestionList
}

type TypeQuestionProps = {
  question: TypeQuestion
}
