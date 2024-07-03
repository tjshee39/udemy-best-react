const { hash } = require('bcryptjs')
const { v4: generateId } = require('uuid')

const { NotFoundError } = require('../util/errors')
const { readUserData, writeUserData } = require('./util')

const add = async (data) => {
  const storedData = await readUserData()
  const userId = generateId()
  const hashedPw = await hash(data.password, 12)
  if (!storedData.users) {
    storedData.users = []
  }
  storedData.users.push({ ...data, password: hashedPw, id: userId })

  await writeUserData(storedData)

  return { id: userId, email: data.email }
}

const get = async (email) => {
  const storedData = await readUserData()
  if (!storedData.users || storedData.users.length === 0) {
    throw new NotFoundError('사용자를 찾을 수 없습니다.')
  }

  const user = storedData.users.find((ev) => ev.email === email)
  if (!user) {
    throw new NotFoundError('입력하신 이메일을 찾을 수 없습니다. ' + email)
  }

  return user
}

exports.add = add
exports.get = get
