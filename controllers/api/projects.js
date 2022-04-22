const express = require('express');
const Project = require('../../models/Projects');
// const Home = require('../../src/components/Home')

module.exports = {
    home,
    index,
    // new,
    // update,
    // create,
    // edit,
    // delete

}
function home(req, res) {
res.send('This is the home page')
}

function index(req, res) {
    Project.find({}, (err, foundProject) => {
        if (err) {
            // res.render("this is the Projects home page")
            res.status(400).send(err)
        } else {
            res.render('')
        }
    })
}

