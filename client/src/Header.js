import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {Link} from "react-router-dom"

function Header(props) {
    const signedIn = props.token !== "" ? true : false
    return (
        <header>
            <Link className="logo" to="/">Quest Outside</Link>
            {signedIn ? <Link className="logout-button header-button button" to="/" onClick={props.logOut}>Log Out</Link> : <Link className="signin-link header-button" to="/signin">Sign In</Link>}
        </header>
    )
}

export default withProfileProvider(Header)
