import { useState } from "react"

const Signup = () => {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    // '-'는 유효하지 않은 글자로 인식되기 때문에 대괄호 사용
    if (data.password !== data['confirm-password']) {
      setPasswordsAreNotEqual(true)
      console.log("비밀번호 확인", passwordsAreNotEqual)

      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>🎉 환영합니다 🎉</h2>
      <p>서비스 시작을 위해 기본정보를 작성해주세요 🚀</p>

      <div className="control">
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" name="email" required/>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" name="password" required minLength={6} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordsAreNotEqual && <p>비밀번호가 일치하지 않습니다.</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">이름</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">성</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">직업</label>
        <select id="role" name="role" required>
          <option value="student">학생</option>
          <option value="teacher">교육자</option>
          <option value="employee">직장인</option>
          <option value="founder">구직자</option>
          <option value="other">그 외</option>
        </select>
      </div>

      <fieldset>
        <legend>❛리폼❜을 어떻게 접하셨나요?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">지인 소개</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">그 외</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" required />
          개인정보 제공 동의
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          초기화
        </button>
        <button type="submit" className="button">
          가입
        </button>
      </p>
    </form>
  )
}

export default Signup