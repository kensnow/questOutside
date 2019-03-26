import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

function QuestLink(props) {
    console.log (props)
    const {name, trails, description, difficulty, xpReward, reqLevel} = props.tag
    // const [trailRefs] = props.trails
    // console.log("user:" + props.user._id)
    // console.log("quest:" + props.tag._id) //why the fuck doesnt this work???
    
    return (
        <div className="quest-link">
            <Link to={{pathname:"/dashboard/quest-info/"+props.tag._id}} >{name}</Link>
        </div>
    )
}

export default QuestLink
