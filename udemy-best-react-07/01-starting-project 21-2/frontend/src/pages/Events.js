import { Suspense } from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
import EventsList from '../components/EventsList'

const Events = () => {
  // 로더에서 반환한 데이터
  const {events} = useLoaderData()

  return (
    <>
      {/* 지연로드된 데이터 사용 */}
      <Suspense fallback={<p style={{textAlign: 'center'}}>로딩중</p>}>
        {/* 로드된 데이터가 준비되면 해당데이터 렌더링 */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default Events

/* 이벤트 데이터 불러오기 */
const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({message: '데이터를 불러올 수 없습니다.'}),
    //   {status: 500});

    return json({message: '데이터를 불러올 수 없습니다.'}, {
      status: 500,
    })
  } else {
    const resData = await response.json()

    return resData.events
  }
}

export const loader = () => {
  // 응답이 늦어지는 데이터 나중에 받음
  // 비동기데이터 점진적으로 로드
  return defer({
    events: loadEvents()
  })
}