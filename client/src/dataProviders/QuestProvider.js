import React, { Component, createContext } from 'react'
import axios from 'axios';

export const {Consumer, Provider} = createContext()

export default class QuestProvider extends Component {
    constructor(){
        super();
        this.state = {
            quests:[]
        }
        console.log(this.state)
        this.getQuests = this.getQuests.bind(this)
    }

    getQuests(){
        return axios.get('/profile/quests')
            .then(res => {
                console.log(res)
                this.setState({
                    quests: [res.data]
                })
                return res
            })

            console.log(this.state)
            
    }

    componentDidMount(){
        this.getQuests()
    }

    render() {
        
        const {value} = this.state.value
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withQuestProvider = C => props => (
    <Consumer>
        {containerProps => <C {...containerProps}{...props} />}
    </Consumer>
)
