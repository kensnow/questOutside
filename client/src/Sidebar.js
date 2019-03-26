import React from 'react'
import Trails from './Trails'
import {Link, Route} from "react-router-dom"

function Sidebar() {
    return (
        <div className="Sidebar">
           <Link to="/profile/quests">Active Quests</Link>
           <Link to="/dashboard/trail-info">Trails</Link>
           <Link to="/dashboard/quest-info">All Quests</Link>
           <Link to="/dashboard">My Dashboard</Link>
        </div>
    )
}

export default Sidebar
