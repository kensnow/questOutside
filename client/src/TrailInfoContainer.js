import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"
import Sidebar from './Sidebar'
import TrailInfo from "./TrailInfo"

function TrailInfoContainer(props) {
    // console.log(props.match.params.id)
 
    //locate matched quest id & pass it & data to quest info card
    const foundTrail = props.trails.find( activeTrail => {
        // console.log(activeQuest._id)
        // console.log(props.match.params.id)
        return (activeTrail._id === props.match.params.id)
    })
 

    return (
        <div className="quest-info-container">
            <Sidebar />
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <TrailInfo {...foundTrail}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(TrailInfoContainer))