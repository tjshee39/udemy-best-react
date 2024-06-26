import { Link } from 'react-router-dom'
import EventsList from '../components/EventsList'

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'event1',
    date: '2024-05-01'
  },
  {
    id: 'e2',
    title: 'event2',
    date: '2024-06-01'
  },
  {
    id: 'e3',
    title: 'event3',
    date: '2024-07-01'
  },
]

const Events = () => {
  return (
    <>
      <EventsList events={DUMMY_EVENTS}/>
    </>
  )
}

export default Events