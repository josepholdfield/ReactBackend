const express = require('express');
const router = express.Router()
const {allShoes} = require('../controllers/fetch')

router.get('/', allShoes)


module.exports = router;