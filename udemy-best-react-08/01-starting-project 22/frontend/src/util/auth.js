import { redirect } from 'react-router-dom'

/* 토큰 만료여부 확인 */
export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration')
  const expirationDate = new Date(storedExpirationDate)
  const now = new Date()
  // duration = 토큰 만료시간 - 현재시간
  // duration > 0 ? 유효 : 만료
  const duration = expirationDate.getTime() - now.getTime()

  return duration
}

/* 토큰 확인 */
export const getAuthToken = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return null
  }

  const tokenDuration = getTokenDuration()

  if (tokenDuration < 0) {
    return 'EXPIRED'
  }

  return token
}

/* 토큰 확인 */
export const tokenLoader = () => {
  return getAuthToken()
}

/* 토큰 확인 로더 */
export const checkAuthLoader = () => {
  const token = getAuthToken()

  // token이 없다면 로그인 페이지로 보냄
  if (!token) {
    return redirect('/auth?mode=login')
  }

  // loader는 항상 return값이 있어야 함(null 또는 다른 객체)
  return null
}