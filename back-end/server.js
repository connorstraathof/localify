const express = require('express')
const app = express()
const Inventory = require('../back-end/Database/Stock.json')
require('dotenv').config()
var cors = require('cors')

app.use(cors())

app.get('/Stock/:id', (req, res) => {
  const singleInventory = Inventory.find(id => {
    return id.id == req.params.id 
  })
  singleInventory ? res.send(singleInventory) : res.status(404).send('Item not found')
})

app.get('/Stock/:companyId/:productId', (req, res) => {
  const specificCompany = Inventory.find(company => {
    return company.id == req.params.companyId
  })
  console.log(specificCompany)
  const specificProduct = specificCompany.inventory.find (item => {
    return item.id == req.params.productId
  })
  console.log(specificProduct)
  specificProduct ? res.send(specificProduct) : res.status(404).send('Item not found')
})

const PORT = process.env.PORT || 8085

app.listen(PORT, () => {
  console.log('connors server')
})