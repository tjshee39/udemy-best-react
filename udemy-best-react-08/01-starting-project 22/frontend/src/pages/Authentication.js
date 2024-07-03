import { json, redirect } from 'react-router-dom'

import AuthForm from '../components/AuthForm'

const AuthenticationPage = () => {
  return <AuthForm />
}

export default AuthenticationPage

/* 로그인 및 가입 */
export const action = async ({request}) => {
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') || 'login'

  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: '지원하지 않는 모드입니다.'}, {status: 422})
  }

  const data = await request.formData()
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if (response.status === 422 || response.status === 401) {
    // 422: valid error
    // 401: 인증 실패 또는 요청거부(유효한 인증정보 부족)
    return response
  }

  if (!response.ok) {
    throw json({message: '사용자 인증 불가'}, {status: 500})
  }

  const resData = await response.json()
  const token = resData.token

  // 토큰 저장
  localStorage.setItem('token', token)

  return redirect('/')
}