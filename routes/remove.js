const express = require('express');
const {deleteShoe} = require('../controllers/remove')

const router = express.Router()


router.delete('/:shoeId', deleteShoe)


module.exports = router;