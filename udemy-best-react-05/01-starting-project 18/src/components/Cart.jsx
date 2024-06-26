import { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import CartContext from '../store/CartContext'
import utils from '../utils/utils'
import Modal from './UI/Modal'
import CartItem from './CartItem'
import Button from './UI/Button'

const Cart = () => {
  const userProgressContext = useContext(UserProgressContext)
  const cartContext = useContext(CartContext)

  // 총 결제금액
  const cartTotal = cartContext.items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  /* 장바구니 닫기 */
  const handleCloseCart = () => {
    userProgressContext.hideCart()
  }

  /* 결제창 열기 */
  const handleGoToCheckout = () => {
    userProgressContext.showCheckout()
  }

  return (
    <Modal 
      className='cart' 
      open={userProgressContext.progress === 'cart'} 
      onClose={userProgressContext.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>장바구니</h2>
      <ul>
        {cartContext.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name} 
            quantity={item.quantity} 
            price={item.price} 
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className='cart-total'>
        {utils.currencyFormatter(cartTotal)}\
      </p>
      <p className='modal-actions'>
        <Button textOnly onClick={handleCloseCart}>닫기</Button>
        {cartContext.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>결제</Button>
        )}
      </p>
    </Modal>
  )
}

export default Cart