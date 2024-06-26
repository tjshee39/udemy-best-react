import { createBrowserRouter } from 'react-router-dom'

import Root from '../pages/Root'
import Home from '../pages/Home'
import EventsRoot from '../pages/EventsRoot'
import Events from '../pages/Events'
import EventDetail from '../pages/EventDetail'
import NewEvent from '../pages/NewEvent'
import EditEvent from '../pages/EditEvent'
import Error from '../pages/Errors'

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
        path: 'events',  // '/'와 같음
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: ':eventId',
            element: <EventDetail />,
          },
          {
            path: 'new',
            element: <NewEvent />,
          },
          {
            path: ':eventId/edit',
            element: <EditEvent />,
          },
        ]
      },
    ],
  },
])

export default router