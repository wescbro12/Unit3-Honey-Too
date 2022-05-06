const express = require('express')
const router = express.Router();
const tool = require('../../controllers/api/tools')

//Tools Index

router.get('/index', tool.index)

//Delete
router.delete('/:id', tool.destroy)


//Update
router.put('/:id/edit', tool.edit)


//Create
router.post('/new',tool.create)


//Show
router.get('/:id', tool.show)


module.exports = router;