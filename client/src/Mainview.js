import React from 'react'
import {Route} from "react-router-dom"
import Details from "./Details"
import Landing from './Landing'
import Signup from "./Signup"
import Signin from "./Signin"
import Dashboard from "./Dashboard"
import QuestContainer from "./QuestContainer"
import QuestInfoContainer from "./QuestInfoContainer"
import QuestListContainer from "./QuestListContainer"
import TrailListContainer from './TrailListContainer'
import TrailInfoContainer from './TrailInfoContainer'
import Trails from "./Trails"
import ProtectedRoute from "./dataProviders/ProtectedRoute"
import Admin from "./admin/Admin"
import Header from './Header'

function Mainview() {
    return (
        <div className="main">
            <Route exact path="/" component={Landing} />
            <Route path="/details" component={Details} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/profile/quests" component={QuestContainer} />
            <ProtectedRoute path="/dashboard/quest-info/:id" component={QuestInfoContainer}/>
            <ProtectedRoute exact path="/dashboard/quest-info" component={QuestListContainer}/>
            <ProtectedRoute exact path="/dashboard/trail-info" component={TrailListContainer}/>
            <ProtectedRoute path="/dashboard/trail-info/:id" component={TrailInfoContainer}/>
            <ProtectedRoute path="/admin" component={Admin} />
            {/* <Route path="/dashboard/trails" component={Trails} /> */}
        </div>
    )
}

export default Mainview
