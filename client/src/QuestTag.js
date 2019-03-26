import React from 'react'
import axios from 'axios'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {Link, Route} from "react-router-dom"


function QuestTag(props) {
    console.log(props)
    const {name, trails, description, difficulty, xpReward, reqLevel} = props.tag
    // const [trailRefs] = props.trails
    const foundQuest = props.user.activeQuests.find( activeQuest => {
        return (activeQuest.quest === props.tag._id)
    })
    
    
    return (
        <div className="quest-tag-container">
            <h3 >{name}</h3>
            <h5>Difficulty: <span className={"difficulty-"+difficulty}>{difficulty}</span></h5>
            <h5>Required Level: {reqLevel}</h5>
            <h5>XP: {xpReward}</h5>
            <p>{description}</p>
            <Link to={{pathname:"/dashboard/quest-info/"+props.tag._id}}>More Info</Link>
           
            {foundQuest ? <button onClick={() => props.completeQuest(props.user._id, props.tag._id, foundQuest._id)}>Complete Quest</button>  : <button onClick={() => props.acceptQuest(props.user._id, props.tag._id)}>Accept Quest</button> }

            
            
        </div>
    )
}

export default withProfileProvider(QuestTag)
