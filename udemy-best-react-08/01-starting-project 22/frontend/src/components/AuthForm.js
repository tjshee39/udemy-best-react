import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom'

import classes from '../css/AuthForm.module.css'

const AuthForm = () => {
  const data = useActionData()  // action response
  const navigation = useNavigation()  // 폼 제출 후 진행상태

  const [searchParams, setSearchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? '로그인' : '회원가입'}</h1>
        {data && data.errors &&
          <ul>
            {Object.values(data.errors).map(err =>
              <li key={err}>{err}</li>
            )}
          </ul>
        }
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? '회원가입' : '로그인'}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? '제출중...' : '저장'}
          </button>
        </div>
      </Form>
    </>
  )
}

export default AuthForm
