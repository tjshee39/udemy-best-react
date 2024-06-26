 import { useState, useRef } from "react"
 
 const Login = () => {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  // valid가 많아질 경우 각 값마다 ref 생성해줘야 함
  // -> 값이 많을 경우 적합하지 않은 방법
  const email = useRef()
  const password = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value

    const emailIsvalid = enteredEmail.includes('@')

    if (!emailIsvalid) {
      setEmailIsInvalid(true)

      return
    }

    setEmailIsInvalid(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">이메일</label>
          <input 
            id="email" 
            // type="email" 
            name="email"
            ref={email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>올바른 형식의 이메일을 입력해주세요.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">비밀번호</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">초기화</button>
        <button className="button">로그인</button>
      </p>
    </form>
  )
}

export default Login