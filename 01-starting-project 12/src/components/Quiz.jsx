import { useState, useCallback, useRef } from 'react'

import QUESTIONS from '../questions.js'
import Question from './Question.jsx'
import Summary from './Summary.jsx'

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([])  // 유저가 선택한 답 배열

  const activeQuestionIndex = userAnswers.length  // 문제 index
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length  // 문제 종료 여부

  // useCallback: 함수 재생성 방지
  /*
    답 선택
    @param selectedAnswer - 유저가 선택한 답 
  */
  const handleSelectAnswer = useCallback(selectedAnswer => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer]
    })
  }, [])

  /* 정답 선택 안함 */
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  /* 더 이상 문제가 없을 경우 */
  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    )
  }

  return (
    <div id='quiz'>
      <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  )
}

export default Quiz