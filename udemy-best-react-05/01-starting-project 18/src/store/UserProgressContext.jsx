import { createContext, useState } from 'react';

/* modal Context */
const UserProgressContext = createContext({
  progress: '',           // cart, checkout
  showCart: () => {},     // 장바구니 보이기
  hideCart: () => {},     // 장바구니 숨기기
  showCheckout: () => {}, // 결제창 보이기
  hideCheckout: () => {}, // 결제창 숨기기
})

/* modal 상태관리 */
export const UserProgressContextProvider = ({children}) => {
  const [userProgress, setUserProgress] = useState('')

  /* 장바구니 보이기 */
  const showCart = () => {
    setUserProgress('cart')
  }

  /* 장바구니 숨기기 */
  const hideCart = () => {
    setUserProgress('')
  }

  /* 결제창 보이기 */
  const showCheckout = () => {
    setUserProgress('checkout')
  }

  /* 결제창 숨기기 */
  const hideCheckout = () => {
    setUserProgress('')
  }

  const userProgressContext = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }

  return <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext