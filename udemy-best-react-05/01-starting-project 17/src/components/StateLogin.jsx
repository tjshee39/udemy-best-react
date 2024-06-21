import { useState } from "react"

import Input from "./Input"
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation"
import { useInput } from "../hooks/useInput"

const StateLogin = () => {
  const {
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value)&& isNotEmpty(value))

  const {
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => !hasMinLength(value, 6))

  const handleSubmit = (event) => {
    event.preventDefault()

    if (emailHasError || passwordHasError) {
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>

      <div className="control-row">
        <Input 
          label="이메일" 
          id="email" 
          type="email" 
          name="email" 
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError && '올바른 형식의 이메일을 입력해주세요.'}
        />
        <Input 
          label="비밀번호" 
          id="password" 
          type="password" 
          name="password" 
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={passwordHasError && '비밀번호를 입력해주세요.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">초기화</button>
        <button className="button">로그인</button>
      </p>
    </form>
  )
}

export default StateLogin