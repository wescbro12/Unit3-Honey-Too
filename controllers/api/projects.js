// const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Project = require('../../models/Projects');
// const Home = require('../../src/pages/Home');

module.exports = {
    index,
    destroy,
    create,
    edit,
    show
    

}



async function index (req, res) {
    try {
      
        const projects = await Project.find({})
        res.status(200).json(projects)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
   
}


//Delete
async function destroy (req, res) {
    try {
        const project = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json(project)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

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
async function edit(req, res) {
    try {
        const project = await Project.findById(req.params.id)
        res.status(200).json(project)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}

//show
async function show(req, res) {
    try {
        const project = await Project.findById(req.params.id)
        res.status(200).json(project)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
}