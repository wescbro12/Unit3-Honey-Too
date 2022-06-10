const Tool = require('../../models/Tools')
const Project = require('../../models/Projects');

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
        res.status(400).json({ msg: err.message })
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
        // console.log(req.params.id)
        const tool = await Tool.create(req.body)
        const project = await Project.findById(req.params.id)
        project.tools.push(tool._id)
        project.save()
        // console.log(project)
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