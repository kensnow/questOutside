import React from 'react'
import QuestTag from './QuestTag'

function QuestList(props) {
    const questGroup = props.quests.filter((quest, i)=> {
        return (quest.reqLevel <= props.user.currentLevel)
    })

    const questArr = questGroup.map((quest, i) => {
        return(<QuestTag key={i} tag={quest} />)
    })
    return (
        <div className="quest-list-container card">
            {questArr}
        </div>
    )
}

export default QuestList
