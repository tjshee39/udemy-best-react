import { useEffect } from 'react'

import ProgressBar from './ProgressBar'

const TIMER = 2000

const DeleteConfirmation = ({ onConfirm, onCancel }) => {

  /* 2초 후 모달 닫기 */
  useEffect(() => {
    // 지정된 시간 이후에 실행
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER)

    // useEffect 이전에 실행: timer 종료
    return () => {
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  )
}

export default DeleteConfirmation
