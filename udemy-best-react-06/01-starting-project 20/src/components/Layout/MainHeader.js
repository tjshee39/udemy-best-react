import CartButton from '../Cart/CartButton'
import classes from '../../css/MainHeader.module.css'

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>리덕스 장바구니</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
