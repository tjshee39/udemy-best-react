import { useRouteLoaderData, json } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetail = () => {
  const data = useRouteLoaderData('event-detail')

  return (
    <>
      {data.event && <EventItem event = {data.event} />}
    </>
  )
}

export default EventDetail

export const loader = async ({request, params}) => {
  const id = params.eventId

  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw json({message: '데이터를 불러올 수 없습니다.'}, {status: 500})
  } else {
    const resData = await response.json()

    return resData
  }
}