const express = require('express')
const trailRouter = express.Router()
const Trail = require('../models/trail')

trailRouter.route('/')
    .get((req, res, next) => {
        Trail.find()
            .then(trailCollection => res.status(200).send(trailCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        const trailData = req.body
        const trailDoc = new Trail(trailData)
        console.log(trailDoc)
        trailDoc.save()
            .then(savedTrailDoc => res.status(201).send(savedTrailDoc))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

trailRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        Trail.findById(id)
            .then(foundTrail => res.status(200).send(foundTrail))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id
        Trail.findByIdAndDelete(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Trail.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedTrail => res.status(200).send(updatedTrail))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })

    module.exports = trailRouter