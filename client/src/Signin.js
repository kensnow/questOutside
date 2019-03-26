import React, { Component, createContext } from 'react'
import {Link} from "react-router-dom"
import {withProfileProvider} from "./dataProviders/ProfileProvider"


class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            // token:"",
            errMsg: "",
        }
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
        this.props.signIn(this.state)
            .then(() => this.props.history.push('/dashboard'))
            .catch((err) => {
                console.log(err)
                this.setState({
                    errMsg: err.response.data
            })
        })
    }
    render() {
        const {email, password, errMsg} = this.state
        return (
            <form className="form signIn-form" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" type="text" placeholder="Enter email" value={email} />
                <input onChange={this.handleChange} name="password" type="text" placeholder="Enter Password" value={password}/>
                <button className="button1">Submit</button>
                {errMsg && <p style={{color: "red"}}>{errMsg}</p>}
            </form>
        )
    }
}

export default withProfileProvider(Signin)