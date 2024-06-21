import { useEffect, useState } from 'react'

const QuestionTimer = ({timeout, onTimeout, mode}) => {
  const [remainingTime, setRemainingTime] = useState(timeout)  // 남은 시간

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout)

    return () => clearTimeout(timer)
  }, [timeout, onTimeout])

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 50)
    }, 50)

    return () => clearInterval(interval)
  }, [onTimeout])

  return (
    <progress id='question-time' value={remainingTime} max={timeout} className={mode} />
  )
}

export default QuestionTimer