import React from 'react'
import QuestTag from "./QuestTag"


function UserQuests(props) {
 
    const questArr = props.user.activeQuests.map((activeQ, i) => {
            const foundQuest = props.quests.find(questElement =>  (questElement._id === activeQ.quest))
            return <QuestTag tag={foundQuest} />
    })


    return (
        <div className="quest-tag-container card">
                    {questArr.length === 0 ? <p>No active quests, go find some!</p> : questArr}
        </div>
    )
}

export default UserQuests
