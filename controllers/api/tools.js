const Tool = require('../../models/Tools')

module.exports = {
    index,
    destroy,
    create,
    edit,
    show,

}


async function index(req, res) {
    try {
        const tools = await Tool.find({})
        res.status(200).json(tools)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}


//Delete
async function destroy(req, res) {
    try {
        const tool = await Tool.findByIdAndDelete(req.params.id)
        res.status(200).json(tool)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

//Update

//Create
async function create(req, res) {
    try {
        const tool = await Tool.create(req.body)
        res.status(200).json(tool)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}
//Edit
async function edit(req, res) {
    try {
        const tool = await Tool.findById(req.params.id)
        res.status(200).json(tool)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

//show
async function show(req, res) {
    try {
        const tool = await Tool.findById(req.params.id)
        res.status(200).json(tool)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}