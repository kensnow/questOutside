import React, { Component } from 'react'

const initialState = {
    objectives: [{
        objectiveName: "Grandeur Peak",
        trails:["West Face", "Church Fork"],
        relatedQuests:"SLC Mountaineer",
        elevation: 8229,
        expVal: 10,
        subArea:"SLC",
        area:"Wasatch Front",
        state:"UT"
    }]
}

export default class ObjectiveProvider extends Component {
    constructor(){
        super();
        this.state = initialState
    }

    getObjectives(){
        //axios req
    }

    render() {
        const {objectives} = this.state
        return (
            this.props.children({
                objectives
            })
        )
    }
}

export const withObjectiveProvider = C => props => (
    <ObjectiveProvider>
        {containerProps => <C {...containerProps} {...props}/>}
    </ObjectiveProvider>
)