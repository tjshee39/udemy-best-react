import { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

import classes from '../css/NewsletterSignup.module.css'

const NewsletterSignup = () => {
  // ui와 연결되지 않은 데이터 가져올 때 사용
  const fetcher = useFetcher()
  const { data, state } = fetcher

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert('회원가입 성공')
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="가입하세용~"
        aria-label="가입하세용~"
      />
      <button>회원가입</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup