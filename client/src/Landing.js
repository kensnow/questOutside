import React from 'react'
import {Link} from "react-router-dom"
import {withProfileProvider} from './dataProviders/ProfileProvider'


function Landing(props) {

    console.log(props)


    return (
        <div className="landing-page-container landing">
            <Link className="landing-link landing button1" to="/details">More Info</Link>
            <Link className="landing-link landing button1" to="/signup">Sign Up</Link>
            {props.token ? <Link to="/dashboard">Dashboard</Link>: 
            <Link className="landing-link landing button1" to="/signin">Log In</Link>}
        </div>
    )
}

export default withProfileProvider(Landing)
