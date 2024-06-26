import { createBrowserRouter } from 'react-router-dom'

import Root from '../pages/Root'
import Error from '../pages/Errors'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,  // '/'와 같음
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />,
      },
    ],
  },
])

export default router
