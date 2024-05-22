import { useState } from "react"

// hook으로 사용하기 위해 함수명 use로 시작
export const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [didEdit, setDidEdit] = useState(false)

  const valueIsValid = validationFn(enteredValue)

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value)
    setDidEdit(false)
  }

  const handleInputBlur = () => {
    setDidEdit(true)
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}