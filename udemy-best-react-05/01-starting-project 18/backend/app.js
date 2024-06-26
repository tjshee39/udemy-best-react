import fs from 'node:fs/promises'

import bodyParser from 'body-parser'
import express from 'express'

import utils from '../src/utils/utils.js'

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/available-meals.json', 'utf8')
  res.json(JSON.parse(meals))
})

app.post('/orders', async (req, res) => {
  const orderData = req.body.order

  if (orderData === null || orderData.items === null || orderData.items.length === 0) {
    return res
      .status(400)
      .json({ message: '주문정보를 확인해주세요.' })
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.address === null ||
    orderData.customer.address.trim() === '' ||
    orderData.customer.phone === null ||
    orderData.customer.phone.trim() === ''
    // orderData.customer.street === null ||
    // orderData.customer.street.trim() === '' ||
    // orderData.customer['postal-code'] === null ||
    // orderData.customer['postal-code'].trim() === '' ||
    // orderData.customer.city === null ||
    // orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    })
  }

  const orders = await fs.readFile('./data/orders.json', 'utf8')
  const allOrders = utils.isEmpty(orders) ? [] : JSON.parse(orders)
  const orderIndex = utils.isEmpty(allOrders) ? 1 : allOrders.length + 1
  const newOrder = {
    ...orderData,
    id: orderIndex,
  }
  allOrders.push(newOrder)
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders))
  
  res.status(201).json({ message: 'Order created!' })
})

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  res.status(404).json({ message: 'Not found' })
})

app.listen(3000)
