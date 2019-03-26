const express = require('express')
const profileRouter = express.Router()
const Profile = require('../models/profile')

// profileRouter.route('/quests', )
profileRouter.route('/')
    .get((req, res, next) => {
        Profile.find()
            .then(profileCollection => res.status(200).send(profileCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        const profileData = req.body
        const profileDoc = new Profile(profileData)
        profileDoc.save()
            .then(savedProfileDoc => res.status(201).send(savedProfileDoc))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

profileRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        Profile.findById(id)
            .then(foundProfile => res.status(200).send(foundProfile))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id
        Profile.findByIdAndDelete(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Profile.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedProfile => res.status(200).send(updatedProfile))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })

    module.exports = profileRouter