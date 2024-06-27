import { useLoaderData, json } from 'react-router-dom'
import EventsList from '../components/EventsList'

const Events = () => {
  const data = useLoaderData()
  const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export default Events

/* 이벤트 데이터 불러오기 */
export const loader = async () => {
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

    return resData
  }
}