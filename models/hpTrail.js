const mongoose = require('mongoose')

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
    length:Number,
    ascent:Number,
    high:Number,
    low:Number,
    longitude:Number,
    latitude:Number

})

module.exports = mongoose.model('OldTrail', trailSchema)