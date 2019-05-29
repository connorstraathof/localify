const express = require('express')
const router = express.Router()
const fs = require('fs')
const inventory = require('../Database/stock.json')

router.get('/:id', (req, res) => {
  const inventoryItem = inventory.find(item => {
    return item.id == req.params.id
  })
  inventoryItem ? res.send(inventoryItem) : res.status(404).send('Item not found')
})
router.put('/:id', (req, res) => {
  const inventoryItem = inventory.find(item => {
    return (item.id = req.params.id)
  })
  if (inventoryItem) {
    inventoryItem.name = req.body.name
    inventoryItem.long_description = req.body.long_description
    inventoryItem.location = req.body.location
    inventoryItem.quantity = req.body.quantity
    inventoryItem.in_stock = req.body.in_stock
    inventoryItem.categories = req.body.categories

    // uncomment next line for production
    // fs.writeFileSync('../Database/inventory.json', JSON.stringify(inventory))
    // console.log(inventoryItem)
    res.send({ message: 'Successfull updated item', item: inventoryItem })
  } else {
    res.status(400).send('Could not find item with that ID')
  }
})

module.exports = router