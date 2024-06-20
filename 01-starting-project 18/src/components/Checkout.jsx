import { useContext, useState } from 'react'
import useHttp from '../hooks/useHttp'
import utils from '../utils/utils'
import UserProgressContext from '../store/UserProgressContext'
import CartContext from '../store/CartContext'
import Modal from './UI/Modal'
import Input from './UI/Input'
import Button from './UI/Button'
import Error from './UI/Error'

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
}

const Checkout = () => {
  const userProgressContext = useContext(UserProgressContext)
  const cartContext = useContext(CartContext)
  
  /* 장바구니 비우기 */
  const {
    data, 
    isLoading: isSending, 
    error, 
    sendRequest, 
    clearData
  } = useHttp(
    'http://localhost:3000/orders', 
    requestConfig
  )

  const [isValidPhoneNum, setIsValidPhoneNum] = useState('')
  const [phoneNumError, setPhoneNumError] = useState(false)

  // 총 결제금액
  const cartTotal = cartContext.items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  /* 결제창 닫기 */
  const handleClose = () => {
    userProgressContext.hideCheckout()
  }

  /* 주문 */
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    // 사용자가 입력한 데이터
    const customerData = Object.fromEntries(formData.entries())

    if (isValidPhoneNum) {
      sendRequest(
        JSON.stringify({
          order: {
            items: cartContext.items,  // 결제항목
            customer: customerData     // 주문정보
          }
        })
      )
    } else {
      setPhoneNumError(true)
    }
  }

  /* 주문 완료 후 장바구니 비우기 */
  const handleFinish = () => {
    userProgressContext.hideCheckout()
    cartContext.clearCart()
    clearData()
  }

  /* 전화번호 핸들러 */
  const onChangePhoneNum = (event) => {
    const phone = utils.phoneNumFormatter(event.target.value)
    const isPhoneNum = utils.isPhoneNum(phone)

    event.target.value = phone

    if (isPhoneNum) {
      setIsValidPhoneNum(true)
    } else {
      setIsValidPhoneNum(false)
    }

    if (utils.isEmpty(phone)) setIsValidPhoneNum('')
  }

  const handleErrorClose = () => {
    setPhoneNumError(false)
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>닫기</Button>
      <Button>주문</Button>
    </>
  )

  if (isSending) {
    actions = <span>주문정보 전송중...🛵</span>
  }

  if (data && !error) {
    return (
      <Modal open={userProgressContext.progress === 'checkout'} onClose={handleClose}>
        <h2>주문 성공!</h2>
        <p>주문정보가 정상적으로 전송되었습니다.</p>
        <p>자세한 정보는 이메일을 통해 확인하세요!📧</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>확인</Button>
        </p>
      </Modal>
    )
  }

  return (
    <>
      <Modal open={userProgressContext.progress === 'checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <h2>결제</h2>

          <Input label="이름" type="text" id="name" />
          <Input label="이메일" type="email" id="email" />
          <Input label="주소" type="text" id="address" />
          <Input 
            label="전화번호" 
            type="text" 
            id="phone" 
            maxLength={13}
            onChange={onChangePhoneNum} 
          />
          {isValidPhoneNum === false && <p className="text-warning">올바르지 않은 형식의 전화번호입니다.</p>}

          <p className="total-amount text-right">총 금액: {utils.currencyFormatter(cartTotal)}\</p>

          {error && <Error title="주문 오류" message={error} />}

          <p className="modal-actions">
            {actions}
          </p>
        </form>
      </Modal>

      <Modal open={phoneNumError === true} onClose={handleErrorClose}>
        <h2 className="text-center">주문정보 오류</h2>
        <p className="text-center">올바른 전화번호를 입력해주세요.</p>
        <p className="modal-actions">
          <Button type="button" onClick={handleErrorClose}>닫기</Button>
        </p>
      </Modal>
    </>
  )
}

export default Checkout