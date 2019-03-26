# User profile
//user profile stores each individual users data, allowing for login/auth to view current profile and track accomplishments
username: {
    type: String,
    required: true
},
psw: {
    type: String,
    required: true
},
level: Number,
xp: Number,
activeTrails:[{
    trail: ObjectId,
    dateAccepted: {
        type: Date, 
        default: Date.now
    }
}],
activeQuests:[{
    quest: ObjectId,
    dateAccepted: {
        type: Date, 
        default: Date.now
    }
}],

completedTrails:[{
    trail:ObjectId, //trail ref
    trailHeadImg:String,
    trailEndImg: String,
    dateAccepted: {
        type: Date, 
        default: Date.now
    },
    dateCompleted: {
        type: Date, 
        default: Date.now
    }
}],
//comments are not in MVP scope
comments:[{
    user: username,
    date: {
        type: Date, 
        default: Date.now
    },
    location: ObjectId 
    comment: String
}]

completedQuests:[{
    quest:ObjectId //quest ref
    date: {
        type: Date, 
        default: Date.now
    }

}]


# ObjectiveRepo
//the objective repo holds single objectives or goals, such as a mountain summit or point of interest. Objectives form the basis for larger scale quests.

objectiveName:{
    type: String,
    required: true
},
imageRef:String,const
trailOptions:[Trail Ref],
relatedQuests: [Quest id, Questid],
elevation:Number,
expVal: Number,
subArea: String,
area: String,
state: String,

# TrailRepo
//the trail repo is a collection of trails which serve as the basis for objectives, and to build quests from to create bigger accomplishments.

trailName: {
    type: String,
    required: true
},
imageRef:String,
length: Number,
elevation: Number,
difficulty: Number,
description: String,
trailHeadGPS: String,
trailEndGPS: String,
subArea: String,
area: String,
state: String,
relatedQuests: [Quest id, Questid],
relatedObjectives: [Objective id, Objective id]
//comments are not in MVP scope
comments:[{
    user: ObjectId,
    date: {
        type: Date, 
        default: Date.now
    },
    comment: String
}]

# QuestRepo
//quest repo is a collection of quests which are comprised of trails to create bigger objectives & multi step objectives
questName: {
    type: String,
    required: true
},
imageRef:String,
reqUserLevel:2,
objectives: [Objective Ref, Objective Ref, etc.]
description: String,
difficulty {
    type: String,
    enum:['Easy', 'Moderate', 'Difficult', 'Epic']
}
difficulty: String,
expVal: Number,
subAreas: [String],
areas: [String],
states: [String],
//comments are not in MVP scope
comments:[{
    user: ObjectId,
    date: {
        type: Date, 
        default: Date.now
    },
    comment: String
}]