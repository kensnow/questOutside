import React from 'react'
import UserQuests from "./UserQuests"
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"
import Sidebar from './Sidebar'

function QuestContainer(props) {

    return (
        <div className="quest-container">
            <Sidebar />
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <UserQuests {...props}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(QuestContainer))
