const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const profileSchema = new mongoose.Schema({
    email:{
        type:String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique:true,
        lowercase:true,
        required:true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    profileImg:{
        type: Buffer,
        contentType:String
    },
    currentLevel: {
        type: Number,
        default:1
    },
    xp:{
        type: Number,
        default:0
    },
    nextLevel:{
        type: Number,
        default:50
    },
    activeQuests:[{
        quest: {
            type: objectId, 
            ref:'Quest',
        },
        requiredTrails:[{
            id: String,
            isCompleted: {
                type: Boolean,
                default: false
            },
                completedOn: Date
            }],
        acceptedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedQuests:[{
        quest: {type: objectId, ref:'Quest'},
        completedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedObjectives:[{
        objective: {type: objectId, ref:'Objective'},
        completedOn: {
            type: Date,
            default: Date.now
        }
    }],
    state:String,
    area:String

})

profileSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password, 10, (err,hash) => {
        if(err) return next (err)
        user.password = hash;
        next()
    })
})

profileSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err){
            return callback(err)
        } else {
            callback(null,isMatch)
        }
    })
}

profileSchema.methods.withoutKeys = function(...keys){
    const user = this.toObject()
    keys.forEach(element => {
        delete user[element]
    });
    return user
}

module.exports = mongoose.model('Profile', profileSchema)