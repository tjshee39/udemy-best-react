import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

const EditEvent = () => {
  const data = useRouteLoaderData('event-detail')
  const event = data.event

  return (
    <>
      <p>EditEvent</p>
      <EventForm
        event={data.event}
      />
    </>
  )
}

export default EditEvent
