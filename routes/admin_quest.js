const express = require('express')
const questRouter = express.Router()
const Quest = require('../models/quest')

questRouter.route('/')
    .get((req, res, next) => {
        Quest.find()
            .then(questCollection => res.status(200).send(questCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req, res, next) => {
        const questData = req.body
        const questDoc = new Quest(questData)
        questDoc.save()
            .then(savedQuestDoc => res.status(201).send(savedQuestDoc))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

questRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        Quest.findById(id)
            .then(foundQuest => res.status(200).send(foundQuest))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .delete((req, res, next) => {
        const id = req.params.id
        Quest.findByIdAndDelete(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Quest.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedQuest => res.status(200).send(updatedQuest))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })

    module.exports = questRouter