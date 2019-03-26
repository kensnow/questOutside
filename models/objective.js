const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const objectiveSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgLink:{
        type:String
    },
    trails:[{type:objectId, ref:'Trails'}],
    relatedQuests:[{type:objectId, ref:'Quests'}],
    elevation:Number,
    xpReward:{
        type:Number,
        required: true
    },
    description: String,
    GPS: String


})

module.exports = mongoose.model('Objective', objectiveSchema)