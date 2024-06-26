import utils from '../utils/utils'

const CartItem = ({name, quantity, price, onIncrease, onDecrease}) => {
  return (
    <li className="cart-item">
      <p>{name} 👉 {quantity} × {utils.currencyFormatter(price)}</p>
      <p className='cart-item-actions'>
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  )
}

export default CartItem