import React from 'react'

function TrailInfo(props) {
    console.log(props)
    const {name, summary,difficulty, location, imgMedium, length, ascent, high} = props
    return (
        <div className="trail-card card">
            <h2>{name}</h2>
            <h5>Difficulty: <span className={"difficulty-"+difficulty}>{difficulty}</span>,</h5><h5>Distance: {length} mi | Vert: {ascent}ft. | Summit: {high}ft.</h5>
            <h5>{location}</h5>
            <p>{summary}</p>
            {imgMedium ? <img className="trail-info-pic"src={imgMedium} alt={name}/> : null}
        </div>
    )
}

export default TrailInfo
