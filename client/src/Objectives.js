import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withObjectiveProvider} from "./dataProviders/ObjectiveProvider"
import ObjectiveTag from "./ObjectiveTag"

function Objectives(props) {
    const objGroup = props.objectives.map((obj, i) => <ObjectiveTag key={i}{...obj}/>)
    return (
        <div>
            {objGroup}
        </div>
    )
}

export default withObjectiveProvider(withProfileProvider(Objectives))
