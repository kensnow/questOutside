const express = require('express')
const questRouter = express.Router()
const Quest = require('../models/quest')
const Profile = require('../models/profile')
const Trail = require('../models/trail')

questRouter.route('/')
    .get((req, res, next) => {

        Quest.find()
            .then(questCollection => res.status(200).send(questCollection))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })
    .put((req,res,next) => {
        const user = req.body.user
        const quest = req.body.quest
        const action = req.body.action
        const subDocId = req.body.subDocId
        const trailId = req.body.trailId
     
        if(action === "accept"){
            Profile.findByIdAndUpdate(user,  {$push: {activeQuests:[{quest}]}}, {new:true})
            .then(user => {
                return Quest.findById(quest)
                    .then(foundQuest => {
                        
                        const reqTrails = foundQuest.trails
                        
                        const getQuestIndex = user.activeQuests.length -1
                
                        reqTrails.map(trailId => {
                            user.activeQuests[getQuestIndex].requiredTrails.push(trailId)
                        })
                        return user.save()
                    })
                })
            .then(updatedProfile => {
                res.status(200).send(updatedProfile)
            })
            .catch(err => {
                res.status(500)
                next(err)
            })
        }

        if(action === "trailComplete"){
            Profile.findById(user)
                .then(user => {
                    return Trail.findById(trailId)
                    .then(dbTrail => {
                        const xp = dbTrail.xpReward
                    
                        const activeQuest = user.activeQuests.find(questElement => {
                            return(questElement.quest == quest)})
                        const indexNum = user.activeQuests.indexOf(activeQuest)
                        const foundTrail = user.activeQuests[indexNum].requiredTrails.find(trailElement => {
                            return(trailElement._id == trailId)
                        })
                        const foundTrailIndex = user.activeQuests[indexNum].requiredTrails.indexOf(foundTrail)
                        user.activeQuests[indexNum].requiredTrails[foundTrailIndex].isCompleted = true;
                        user.xp = user.xp + xp
                        //level up handler
                        while (user.xp >= user.nextLevel){
                            user.nextLevel = Math.round(user.nextLevel + (user.nextLevel * 1.25))
                            user.currentLevel++
                        }
                        return user.save()
                    })
                   
                })
            .then(updatedProfile => {
                res.status(200).send(updatedProfile)
            })
            .catch(err => {
                res.status(500)
                next(err)
            })
        }

        if(action === "complete"){
            Profile.findByIdAndUpdate(user,  {$push: {completedQuests:[{quest}]}}, {new:true})
            .then(user => {
                return Quest.findById(quest)
                    .then(foundQuest => {
                        const xp = foundQuest.xpReward
                        user.xp = user.xp + xp
                        //level up handler
                        while (user.xp >= user.nextLevel){
                            user.nextLevel = Math.round(user.nextLevel + (user.nextLevel * 1.25))
                            user.currentLevel++
                        }
                        return user.save()
                        
                    })
       
                
            })
            .then(user => {
                user.activeQuests.id(subDocId).remove()
                // console.log(user)
                //save the user
                return user.save()
            })
            .then(user => {
                // send back user
                res.status(200).send(user)
            })
            // catch error
            .catch(err => {
                res.status(500)
                next(err)
            })
        }
        

    })

    module.exports = questRouter