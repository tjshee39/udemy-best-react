import { json, redirect } from 'react-router-dom'

import EventForm from '../components/EventForm'

const NewEvent = () => {

  return (
    <>
      <EventForm />
    </>
  )
}

export default NewEvent

/* 이벤트 신규등록 */
export const action = async ({request, params}) => {
  const data = await request.formData()

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok) {
    throw json({message: '이벤트 저장 실패'}, {status: 500})
  }

  return redirect('/events')
}