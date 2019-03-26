import React from 'react'
import {Link, Route} from "react-router-dom"
import {withProfileProvider} from "./dataProviders/ProfileProvider"

function TrailTag(props) {
    console.log(props)

    
    const {name, summary, location, length, ascent, difficulty, imgSqSmall,_id} = props.trail
    return (
        <div className="trail-tag-container">
            <div className="trail-thumbnail-container">
                {imgSqSmall ? <img className="thumbnail tag-pic trail-tag-pic"src={imgSqSmall} alt={name}/> : null}
            </div>
            <div className="trail-info-data-container">
                <Link to={{pathname:"/dashboard/trail-info/"+_id}}><h2>{name}</h2></Link>
                <h3>{location}, {length}mi </h3>
                <p>{summary === "Placeholder" ? null : summary}</p>
                {props.acceptedQuest ? props.acceptedQuest.isCompleted ? <h3 className="trail-complete-message">All done, great job!</h3> : <button className="trail-task-button" onClick={() => props.completeTrail(props.user._id,props.quest,props.acceptedQuest,_id)}>Complete</button> : ""}
            </div>
        </div>
    )
}

export default withProfileProvider(TrailTag)
