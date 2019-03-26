const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId


const trailSchema = new mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true
    },
    type:String,
    summary:String,
    difficulty: String,
    location: String,
    url:String,
    imgMedium:String,
    imgSqSmall:String,
    length:Number,
    ascent:Number,
    high:Number,
    low:Number,
    longitude:Number,
    latitude:Number,
    xpReward:Number

})

module.exports = mongoose.model('Trail', trailSchema)