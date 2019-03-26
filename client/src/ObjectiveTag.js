import React from 'react'

function ObjectiveTag({objectiveName, elevation, expVal}) {
    return (
        <div>
            <h3>{objectiveName}</h3>
            <ul>
                <li>Elevation: {elevation}ft</li>
                <li>XP: {expVal}</li>
            </ul>
        </div>
    )
}

export default ObjectiveTag
