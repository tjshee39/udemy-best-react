import { useDispatch, useSelector } from 'react-redux'

import { uiActions } from '../../store/ui-slice'
import classes from '../../css/CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>장바구니</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton
