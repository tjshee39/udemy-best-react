import { useContext } from 'react'
import CartContext from '../store/CartContext.jsx'
import utils from '../utils/utils.js'
import Button from './UI/Button.jsx'

const MealItem = ({meal}) => {
  const cartContenxt = useContext(CartContext)

  /* 장바구니 추가 */
  const handleAddMealToCart = () => {
    cartContenxt.addItem(meal)
  }

  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {utils.currencyFormatter(meal.price)}\
          </p>
          <p className="meal-item-description">
            {utils.convertBrToNewLine(meal.description)}
          </p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>장바구니 담기</Button>
        </p>
      </article>
    </li>
  )
}

export default MealItem