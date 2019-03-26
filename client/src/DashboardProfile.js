import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import QuestLink from "./QuestLink"

function DashboardProfile(props) {
    
    const {username,currentLevel, xp, activeQuests, completedQuests} = props.user
    console.log(props)

    const questLinks = activeQuests.map(( userQuest, i) => {
        const foundQuest = props.quests.find(q => {
            return (q._id === userQuest.quest)
        })
        const questDisplay = {
            ...userQuest,
            tag:foundQuest
        }
        console.log(questDisplay)
        return <QuestLink key={i} {...questDisplay} />
    })

    console.log(questLinks)
    return (
        // const questMap = 
        <div className="dashboard-container profile-card card" >
            <div className="profile-pic thumbnail"></div>
            <div className="profile-container">
                <h3>{username}</h3>
                <h4>Level {currentLevel}</h4>
                <h5>XP: {xp}</h5>
                <h5>Next Level: {props.user.nextLevel}</h5>
            </div>
            <div className="active-quest-container">
                <h5>Active Quests:</h5>
                {questLinks}
                    {/* <li>Completed Quests: {completedQuests}</li> */}
           

            </div>

        </div>
    )
}

// export default withDataProvider(withProfileProvider(DashboardProfile))
export default DashboardProfile