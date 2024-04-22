import { useState, useEffect } from 'react'

const ProgressBar = ({timer}) => {
  const [remainingTime, setRemainingTime] = useState(timer)

  /* 타이머 설정 */
  useEffect(() => {
    // 지정된 시간마다 실행
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10)
    }, 10)

    return () => {
      // useEffect 이전에 실행: interval 종료
      clearInterval(interval)
    }
  }, [])

  return <progress value={remainingTime} max={timer} />
}

export default ProgressBar