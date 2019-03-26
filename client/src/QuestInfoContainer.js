import React from 'react'
import UserQuests from "./UserQuests"
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"
import Sidebar from './Sidebar'
import QuestInfo from "./QuestInfo"

function QuestInfoContainer(props) {
    // console.log(props.match.params.id)
    //locate matched quest id & pass it & data to quest info card
    const foundQuest = props.quests.find( activeQuest => {
        // console.log(activeQuest._id)
        // console.log(props.match.params.id)
        return (activeQuest._id === props.match.params.id)
    })

    // console.log(foundQuest)

    return (
        <div className="quest-info-container">
            <Sidebar />
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <QuestInfo info={foundQuest} {...props}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(QuestInfoContainer))