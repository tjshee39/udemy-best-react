import { useParams } from 'react-router-dom'

const EventDetail = () => {
  const params = useParams()

  return (
    <>
      <p>EventDetail</p>
      <p>{params.eventId}</p>
    </>
  )
}

export default EventDetail