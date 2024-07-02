import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

const EditEvent = () => {
  const data = useRouteLoaderData('event-detail')

  return (
    <>
      <p>EditEvent</p>
      <EventForm method="patch" event={data.event}/>
    </>
  )
}

export default EditEvent
