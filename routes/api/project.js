const express = require('express')
const router = express.Router();
const project = require('../../controllers/api/projects')



//Home
router.get('/', project.home)


//Projects Home

router.get('/projects', project.index)



module.exports = router;