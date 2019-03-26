import React from 'react'
import {Route} from "react-router-dom"
import Objective from './Objective'
import Quest from './Quest'
import Trail from './Trail'
import {Link} from "react-router-dom"

function Admin() {
    return (
        <div className="admin-page-container">
            <Link to="/admin/objective">Objective</Link>
            <Link to="/admin/quest">Quest</Link>
            <Link to="/admin/trail">Trail</Link>

            <Route path="/admin/objective" component={Objective} /> 
            <Route path="/admin/quest" component={Quest} />
            <Route path="/admin/trail" component={Trail} />

        </div>
    )
}

export default Admin
