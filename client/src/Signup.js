import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import {withProfileProvider} from "./dataProviders/ProfileProvider"

const initialState = {
    email:"",
    username:"",
    password:"",
    state:"",
    area:""
}

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = initialState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target: {name, value}}){
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.props)
        //send axios request to update
        this.props.signUp(this.state)
            .then(() => this.props.history.push('/dashboard'))

    }

    render() {
        const {username, password, state, area, email, errMsg} = this.state
        const link = `user/${username}`
        return (
            <div>
                <h2>Sign up! Quest Outside</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="username" type="text" placeholder="Create Unique Username" value={username} />
                    <input onChange={this.handleChange} name="email" type="text" placeholder="Enter Email" value={email} />
                    <input onChange={this.handleChange} name="password" type="text" placeholder="Create password" value={password}/>

                    {errMsg && <p style={{color: "red"}}>{errMsg}</p>}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withProfileProvider(Signup)