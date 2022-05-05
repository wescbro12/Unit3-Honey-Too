const express = require('express')
const router = express.Router();
const tool = require('../../controllers/api/tools')

//Tools Index

router.get('/', tool.index)

//Delete
router.delete('/:id', project.destroy)


//Update
router.put('/:id', tool.edit)


//Create
router.post('/',tool.create)


//Show
router.get('/:id', tool.show)


module.exports = router;