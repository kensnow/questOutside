import React, { Component } from 'react'
import axios from 'axios';
import {withDataProvider} from "./DataProvider"



class Objective extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: "",
            imgLink: "",
            trails: [],
            relatedQuests: [],
            elevation: 0,
            xpReward: 0,
            description: "",
            GPS: ""
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
            [name]: ! value
        }))
        console.log("after:" + JSON.stringify(this.state))
    }

    //IN COMPONENT DID MOUNT, load in trails into an array

    //map through the array & create checkbox items for each trail

    //on submit, map through check boxed items and:
    // - add checkbox trail id to objective.trails[]
    // - put request in .then to update trail in trails db with objective id

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        axios.post("/admin/objective", {
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
        
            return (<span><input onChange={this.handleCheckbox} key={i} name={trail._id} value="false" type="checkbox" id={trail._id} />{trail.name}, {trail.area} {trail.subarea} {trail.state},</span>)
        })
        console.log(checkboxArr)

        return (
            <div className="admin-panel">
                <h3>Objective Creation Tool</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter Objective Name" />
                    <input onChange={this.handleChange} type="text" name="imgLink" placeholder="Enter link to pic here" />
                    <input onChange={this.handleChange} type="number" name="elevation" placeholder="Enter Max Elevation (ft)" />
                    <input onChange={this.handleChange} type="number" name="xpReward" placeholder="Enter XP Reward" />
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="gps" placeholder="enter GPS coordinates" />

                    <h5>Trails used:</h5>
                    {checkboxArr}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withDataProvider(Objective)