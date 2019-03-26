import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"
import Sidebar from './Sidebar'
import TrailList from "./TrailList"

function TrailListContainer(props) {
    // console.log(props.match.params.id)
    //locate matched quest id & pass it & data to quest info card

    // console.log(foundQuest)

    return (
        <div className="quest-info-container">
            <Sidebar />
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <TrailList {...props}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(TrailListContainer))