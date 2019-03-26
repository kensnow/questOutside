import React from 'react'
import {Link} from "react-router-dom"

function TrailList(props) {
    console.log(props)
    const trailArr = props.trails.map((trail, i)=> {
        console.log(trail)

        return(<Link className="trail-link" key={i}to={{pathname:"/dashboard/trail-info/"+trail._id}}>{trail.name}</Link>)
    })
    return (
        <div className="card">
            {trailArr}
        </div>
    )
}

export default TrailList
