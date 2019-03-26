import React from 'react'
import TrailTag from './TrailTag'
import Sidebar from './Sidebar'
import DashboardProfile from './DashboardProfile'
function QuestInfo(props) {
    const {name, description, difficulty, xpReward, reqLevel, trails, _id} = props.info
    console.log(props)
    //populate found quest if the quest is in the users active quests array
    const foundQuest = props.user.activeQuests.find( activeQuest => {
        return (activeQuest.quest === _id)
    })
    console.log(foundQuest)
    //map through each trail for the quest
    const trailArr = trails.map((trailId, i ) => {
        console.log(trailId)
        const foundTrailObject = props.trails.find(trailElement => trailElement._id === trailId)
        console.log(foundTrailObject)
        return (<TrailTag key={i} trail={foundTrailObject} quest={props.match.params.id} acceptedQuest={foundQuest ? foundQuest.requiredTrails[i] : null} user={props.user} />)
    })

    //check that all required trails are complete on found quest
   
    //foreach trail, map through.
    //linf trail dat in trail props object.
    //populate trail card, store in array, render array in browser
    return (
        <div >
            <DashboardProfile {...props}/>
            <div className="quest-info-container card">
                <h2>{name}</h2>
                <h4 className={"difficulty-"+difficulty}>{difficulty}</h4>
                <h5>XP: {xpReward}</h5>
                <h5>Required Level: {reqLevel}</h5>
                <p>{description}</p>
                <div className="trail-list-container">
                    <ul>
                        {trailArr}
                    </ul>
                </div>

        
                {foundQuest ? <button onClick={() => props.completeQuest(props.user._id, _id, foundQuest._id)}>Complete Quest</button>  : <button onClick={() => props.acceptQuest(props.user._id, _id)}>Accept Quest</button> }
                </div>

        </div>
    )
}

export default QuestInfo
