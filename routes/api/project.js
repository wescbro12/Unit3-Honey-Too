const express = require('express')
const router = express.Router();



//Home
router.get('/', (req, res) => {
    res.send('welcome to the home page')
})

module.exports = router;