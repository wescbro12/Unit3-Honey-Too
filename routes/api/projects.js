const express = require('express')
const router = express.Router();
const project = require('../../controllers/api/projects')




//Projects Index

router.get('/index', project.index)

//Delete
router.delete('/:id', project.destroy)

//Udate
router.put('/:id/edit', project.edit)

//Create new 
router.post('/new', project.create)

//Show Route
router.get('/:id', project.show)

module.exports = router;