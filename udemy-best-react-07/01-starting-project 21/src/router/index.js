import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Root from '../pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
])

export default router
