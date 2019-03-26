import React, { Component } from 'react'
import axios from 'axios';
import {withDataProvider} from "./DataProvider"

class Quest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            reqLevel: 0,
            objectives: [],
            description: "",
            difficulty: "",
            xpReward: "",
            trails:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }


    handleChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        })
    }


    handleCheckbox({ target: { name, value } }) {
        console.log("before:" + JSON.stringify(this.state))
        this.setState(ps => ({
            trails: [...ps.trails, name]
        }))
        console.log("after:" + JSON.stringify(this.state))
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        axios.post("/admin/quest", {
            ...this.state
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const checkboxArr = this.props.trails.map((trail, i) => {
        
            return (<span key={trail._id}><input onChange={this.handleCheckbox} key={trail._id} name={trail._id} value="false" type="checkbox" id={trail._id} />{trail.name} - {trail.location}</span>)
        })

        return (
            <div className="admin-panel">
                <h3>Quest Creation Tool</h3>
                <form className="quest-form form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter quest name here" />
                    <input onChange={this.handleChange} type="number" name="reqLevel" placeholder="Required Level" />
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="difficulty" placeholder="Enter difficulty here" />
                    <input onChange={this.handleChange} type="number" name="xpReward" placeholder="Enter XP reward here" />
                    <button>Submit</button>
                    {checkboxArr}
                </form>
            </div>
        )
    }
}

export default withDataProvider(Quest)