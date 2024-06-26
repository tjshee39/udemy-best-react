/* null 체크 */
export const isEmpty = (data) => {
  return (
    data === null ||
    typeof(data) === 'undefined' ||
    data === '' ||
    data === 'null' ||
    data.length <= 0
  )
}

/* 원화 포맷 */
export const currencyFormatter = (currency) => {
  if (isEmpty(currency)) return 0.0

  return Number(currency).toLocaleString('ko-KR')
}

/* <br>태그 개행문자로 치환 */
export const convertBrToNewLine = (str) => {
  if (isEmpty(str)) return ''

  return str.replace(/<br\s*\/?>/gi, '\n')
}

/* 전화번호 형식체크 */
export const isPhoneNum = (phone) => {
  if (isEmpty(phone)) return false

  const onlyNumber = /[^0-9]/g
  const phoneRule = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/
  const planePhoneNum = phone.replace(onlyNumber, '')

  return phoneRule.test(planePhoneNum)
}

/* 전화번호 포맷 */
export const phoneNumFormatter = (phone) => {
  if (isEmpty(phone)) return ''

  const onlyNumber = /[^0-9]/g
  const phoneFormat = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/
  const planePhoneNum = phone.replace(onlyNumber, '')

  return planePhoneNum.replace(phoneFormat, `$1-$2-$3`)
}

const utils = {
  isEmpty,
  currencyFormatter,
  convertBrToNewLine,
  isPhoneNum,
  phoneNumFormatter
}

export default utils