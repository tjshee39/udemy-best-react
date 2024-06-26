import { Link, useNavigate } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Home = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/products')
  }

  return (
    <>
      <h1>home page</h1>
      <button onClick={navigateHandler}>
        Navigate
      </button>
    </>
  )
}

export default Home
