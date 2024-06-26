// Challenge / Exercise

// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider } from 'react-router-dom'
import router from './router/index'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
