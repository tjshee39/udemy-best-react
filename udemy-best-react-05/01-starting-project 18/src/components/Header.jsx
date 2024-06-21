import { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import CartContext from '../store/CartContext'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
  const userProgressContext = useContext(UserProgressContext)
  const cartContext = useContext(CartContext)

  const handleShowCart = () => {
    userProgressContext.showCart()
  }

  // 장바구니 항목 총 갯수
  const totalCartItems = cartContext.items.reduce((total, item) => {
    return total += item.quantity
  }, 0)

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='a restaurant' />
        <h1>리오더</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          🛒장바구니 ({totalCartItems})
        </Button>
      </nav>
    </header>
  )
}

export default Header