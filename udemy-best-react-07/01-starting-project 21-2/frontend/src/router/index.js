import { createBrowserRouter } from 'react-router-dom'

import Root from '../pages/Root'
import Home from '../pages/Home'
import EventsRoot from '../pages/EventsRoot'
import Events, { loader as eventsLoader } from '../pages/Events'
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction } from '../pages/EventDetail'
import NewEvent, { action as newEventAction } from '../pages/NewEvent'
import EditEvent from '../pages/EditEvent'
import Error from '../pages/Error'

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
            loader: eventsLoader  // 페이지 호출하기 전에 실행, 동작완료 후 이동
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction
              },
              {
                path: 'edit',
                element: <EditEvent />,
              },
            ]
          },
          {
            path: 'new',
            element: <NewEvent />,
            action: newEventAction
          },
        ]
      },
    ],
  },
])

export default router