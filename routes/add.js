const express = require('express');
const {addShoe} = require('../controllers/add')

const router = express.Router()

router.post('/add', addShoe)

module.exports = router;



