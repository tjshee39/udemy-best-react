import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation
