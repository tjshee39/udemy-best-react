import { useEffect } from 'react'
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom'

import { getTokenDuration } from '../util/auth'
import MainNavigation from '../components/MainNavigation'

const Root = () => {
  const token = useLoaderData()
  const submit = useSubmit()  // 양식 내의 데이터가 변경될 때마다 양식 제출

  useEffect(() => {
    // token이 유효하지 않을 경우
    if (!token) {
      return
    }

    if (token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'post'})

      return
    }

    const tokenDuration = getTokenDuration()

    // 토큰이 만료되면 자동 로그아웃
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, tokenDuration)
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root