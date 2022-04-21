const express = require('express');
const Project = require('../../models/Projects');

module.exports = {
    home,
    index,
    // new,
    // update,
    // create,
    // edit,
    // delete

}

function index(req, res) {
    Project.find({}, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        }
    })
}

