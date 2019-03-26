const express = require('express')
const Profile = require('../models/profile')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    Profile.findOne({email: req.body.email}, (err,existingUser) => {

        if (err){return res.status(500).send(err)}
        if (existingUser !== null){ return res.status(400).send({success:false, err:"Email already exists"})
        }

        const newUser = new Profile(req.body)
        newUser.save((err,user) => {
            if (err){
                res.status(500)
                return next(err)
            }
            //if user signs up, provide token immediately so they dont have to re login
            const token = jwt.sign(user.withoutKeys("password"), process.env.SECRET)
            return res.status(201).send({success:true, user:user.withoutKeys("password","isAdmin"), token})
        })

    })

})

authRouter.post('/signin',(req, res,next) => {
    Profile.findOne({email:req.body.email.toLowerCase()}, (err, user) => {
        if (err){return res.status(500).send(err)}
        if(!user){
            res.status(403);
            return next(Error('Email not found'))
        }

        user.checkPassword(req.body.password, (err, match) => {

            if(err){ 
                return next(err)
            }else if(!match) {
                res.status(401)
                return next(Error("Email or password are incorrect"))
            }else {
                const token = jwt.sign(user.withoutKeys("password"),process.env.SECRET)
                return res.send({token: token, user: user.withoutKeys("password","isAdmin"), success:true})
            }
        })
    })
})

module.exports = authRouter