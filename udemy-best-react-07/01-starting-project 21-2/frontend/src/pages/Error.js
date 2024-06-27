import { useRouteError } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'

const Error = () => {
  const error = useRouteError()
  console.log('error::', error)

  let title = '오류'
  let message = '먼가 잘못됨'

  if (error.status === 500) {
    message = error.data.message
  }

  if (error.status === 404) {
    title = '404'
    message = '요청하신 페이지를 찾을 수 없습니다.'
  }

  return (
    <>
      <MainNavigation />
      <PageContent title="에러">
        <p>{message}</p>
      </PageContent>
    </>
  )
}

export default Error