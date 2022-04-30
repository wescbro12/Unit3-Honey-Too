const express = require('express')
const router = express.Router();
const project = require('../../controllers/api/projects')




//Projects Index

router.get('/index', project.index)


//Create new 
router.post('/new', project.create)

module.exports = router;