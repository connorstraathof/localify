// const express = require('express')
// const router = express.Router()
// const fs = require('fs')
// const shops = require('../Database/shops.json')

// router.get('/', (req, res) => {
//     res.send(shops)
// })

// router.get('/:id', (req, res) => {
//     const shopsInventory = shops.find(shop => {
//       return shop.id == req.params.id
//     })
//     shopsInventory
//       ? res.send(shopsInventory)
//       : res.status(404).send('That item does not exist')
//   })

// module.exports = router