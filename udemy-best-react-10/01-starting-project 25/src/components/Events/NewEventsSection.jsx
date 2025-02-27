import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import LoadingIndicator from '../UI/LoadingIndicator.jsx'
import ErrorBlock from '../UI/ErrorBlock.jsx'
import EventItem from './EventItem.jsx'
import { fetchEvents } from '../../util/http.js'

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    // 데이터 재사용을 위한 식별자
    queryKey: ['events'],
    // promise 반환값 필요
    queryFn: fetchEvents,
    // n초 뒤 추가요청 보냄
    staleTime: 5000,
    // 캐시에 데이터가 저장되는 시간
    // dcTime: n
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message={ error.info?.message || 'Failed to fecth events.' } />
    )
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  )
}
