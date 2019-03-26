const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')
const app = express()

app.use(express.json())

//dashboard endpoint when user logs in

app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/profile/quests', require('./routes/quest'))
app.use('/api/profile', require('./routes/profile'))



app.use('/auth', require('./routes/auth'))
app.use('/admin/quest', require('./routes/admin_quest'))
app.use('/admin/objective', require('./routes/admin_objective'))
app.use('/admin/trail', require('./routes/admin_trail'))
// app.use('/api/admin', (req,res,next) =>{
//     if(req.user.isAdmin){
//         next()
//     } else {
//         res.status(403)
//         next(Error('Unauthorized'))
//     }
// }, require('./routes/admin'))

app.use((err, req, res, next) => {
    console.log(err.name)

    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
   
    return (res.send(err.message))
})


mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT, () => (
    console.log('listening on port ' + process.env.PORT)
))