import React from 'react'
import UserQuests from "./UserQuests"
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"
import Sidebar from './Sidebar'
import QuestList from "./QuestList"

function QuestListContainer(props) {
    // console.log(props.match.params.id)
    //locate matched quest id & pass it & data to quest info card

    // console.log(foundQuest)

    return (
        <div className="quest-info-container">
            <Sidebar />
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <QuestList {...props}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(QuestListContainer))