const express = require('express')
const objectiveRouter = express.Router()
const Objective = require('../models/objective')

objectiveRouter.route('/')
    .get((req, res, next) => {
        Objective.find()
            .then(objectiveCollection => res.status(200).send(objectiveCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        const objectiveData = req.body
        const objectiveDoc = new Objective(objectiveData) //turn post request into new objective object
        objectiveDoc.save()
            .then(savedObjectiveDoc => res.status(201).send(savedObjectiveDoc))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

objectiveRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        Objective.findById(id)
            .then(foundobjective => res.status(200).send(foundobjective))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id
        Objective.findByIdAndDelete(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Objective.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedobjective => res.status(200).send(updatedobjective))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })

    module.exports = objectiveRouter