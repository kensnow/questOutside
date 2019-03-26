import React, { Component } from 'react'
import axios from 'axios';

const initialState= {
    name:"",
    imgLink:"",
    relatedObjectives:[],
    relatedQuests:[],
    distance:0,
    elevationGain:0,
    description:"",
    trailHeadGPS:"",
    trailEndGPS:"",
    subarea:"",
    area:"",
    state:""
}
export default class Trail extends Component {
    constructor(){
        super();
        this.state = initialState

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post("/admin/trail", {
            ...this.state
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState(initialState)
    }

    render() {
        return (
            <div className="admin-panel">
                <h3>Trail Creation Tool</h3>
                <form onSubmit={this.handleSubmit} id="trail-form">
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter trail name here" />

                    <input onChange={this.handleChange} type="text" name="imgLink" placeholder="Enter link to pic here" />
                    <select onChange={this.handleChange} name="difficulty" form="trail-form">
                        <option value="">Select difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Difficult">Difficult</option>
                        <option value="Epic">Epic</option>
                    </select>
                    <input onChange={this.handleChange} type="number" step="0.1" name="distance" placeholder="Enter Distance here" />
                    <input onChange={this.handleChange} type="number" name="elevationGain" placeholder="enter elevation gain here"/>
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="trailHeadGPS" placeholder="Enter trail head GPS here"/>
                    <input onChange={this.handleChange} type="text" name="trailEndGPS" placeholder="Enter Trail end GPS here"/>
                    <input onChange={this.handleChange} type="text" name="subarea" placeholder="Sub Area"/>
                    <input onChange={this.handleChange} type="text" name="area" placeholder="Area"/>
                    <input onChange={this.handleChange} type="text" name="state" placeholder="State"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
