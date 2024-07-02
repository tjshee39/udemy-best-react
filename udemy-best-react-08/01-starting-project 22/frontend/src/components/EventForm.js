import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom'

import classes from '../css/EventForm.module.css'

const EventForm = ({ method, event }) => {
  // form action이 반환한 데이터
  const data = useActionData()
  const navigate = useNavigate()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'
  const cancelHandler = () => {
    navigate('..')
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        {data && data.errors &&
          <ul>
            {Object.values(data.errors).map(err =>
              <li key={err}>{err}</li>
            )}
          </ul>
        }
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  )
}

export default EventForm

/* 이벤트 신규등록/수정 */
export const action = async ({request, params}) => {
  const method = request.method
  const data = await request.formData()

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  // 이벤트 신규등록
  let url = 'http://localhost:8080/events'

  // 이벤트 수정
  if (method === 'PATCH') {
    const eventId = params.eventId
    url = url + '/' + eventId
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData)
  })

  if (response.status === 422) {
    return response
  }

  if (!response.ok) {
    throw json({message: '이벤트 저장 실패'}, {status: 500})
  }

  return redirect('/events')
}
