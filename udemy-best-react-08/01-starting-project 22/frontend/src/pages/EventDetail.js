import { Suspense } from 'react'
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom'

import { getAuthToken } from '../util/auth'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'

const EventDetail = () => {
  const {event, events} = useRouteLoaderData('event-detail')

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>로딩중...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>로딩중...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetail

/* 로더 정의 */
export const loader = async ({request, params}) => {
  const id = params.eventId

  // 데이터 지연 로드: 초기 페이지 로드시간 줄이기 위해 사용
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

/* 이벤트 상세정보 */
const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw json({message: '이벤트를 불러오는 중 오류가 발생하였습니다.'}, {status: 500})
  } else {
    const resData = await response.json()
    return resData.event
  }
}

/* 이벤트 목록 */
const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    throw json({message: '이벤트를 불러오는 중 오류가 발생하였습니다.'}, {status: 500})
  } else {
    const resData = await response.json()
    return resData.events
  }
}

/* 이벤트 삭제 */
export const action = async ({params, request}) => {
  const eventId = params.eventId

  const token = getAuthToken()
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })

  if (!response.ok) {
    throw json({message: '삭제 중 오류가 발생하였습니다.'}, {status: 500})
  }

  return redirect('/events')
}