import { useRouteLoaderData, json, redirect } from 'react-router-dom'
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

/* 이벤트 정보 불러오기 */
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

/* 이벤트 삭제 */
export const action = async ({params, request}) => {
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  })

  if (!response.ok) {
    throw json({message: '삭제 중 오류가 발생하였습니다.'}, {status: 500})
  }

  return redirect('/events')
}