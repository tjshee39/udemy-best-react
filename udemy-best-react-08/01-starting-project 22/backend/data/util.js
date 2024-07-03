const fs = require('node:fs/promises')

const readData = async () => {
  const data = await fs.readFile('events.json', 'utf8')

  return JSON.parse(data)
}

const writeData = async (data) => {
  await fs.writeFile('events.json', JSON.stringify(data))
}

const readUserData = async () => {
  const data = await fs.readFile('users.json', 'utf8')

  return JSON.parse(data)
}

const writeUserData = async (data) => {
  await fs.writeFile('users.json', JSON.stringify(data))
}

exports.readData = readData
exports.writeData = writeData
exports.readUserData = readUserData
exports.writeUserData = writeUserData