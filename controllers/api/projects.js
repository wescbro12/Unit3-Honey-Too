// const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Project = require('../../models/Projects');
// const Home = require('../../src/pages/Home');

module.exports = {
    index,
    // delete,
    // update,
    create,
    // edit,
    //show
    

}



async function index (req, res) {
    try {
      
        const projects = await Project.find({title:"test 2"})
        res.status(200).json(projects)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
   
}


//Delete

//Update

//Create
async function create(req, res) {
    try {
        const project =  await Project.create(req.body)
        res.status(200).json(project)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}
//Edit

//show