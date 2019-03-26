const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const questSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    reqLevel:{
        type: Number,
        default: 1
    },
    trails:[{type:objectId, ref:'Trail'}],
    description:{
        type: String,
        required:true
    },
    difficulty:{
        type: String,
        enum:['Easy', 'Moderate', 'Difficult', 'Epic']
    },
    xpReward:{
        type:Number,
        required: true
    }

})


module.exports = mongoose.model('Quest', questSchema)