import React, { Component, createContext } from 'react'
import axios from 'axios'
export const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = {
            trails:[],
            objectives:[],
            quests:[],
            loading: true
        }

        this.getTrailData = this.getTrailData.bind(this)
        this.getObjectiveData = this.getObjectiveData.bind(this)
        this.getQuestData = this.getQuestData.bind(this)
    }

    getTrailData(){
        return axios.get("/admin/trail")
            .then(res => {
                this.setState({
                    trails:res.data,
                    loading:false
                })
            })
    }

    getObjectiveData(){
        return axios.get("/admin/objective")
        .then(res => {
            this.setState({
                objectives:res.data
            })
        })
    }


    getQuestData(){
        return axios.get("/admin/quest")
        .then(res => {
            this.setState({
                quests: res.data
                
            })
        })
        
    }

    componentDidMount(){

        this.getObjectiveData()
        this.getQuestData()
        this.getTrailData()
   
    }
    render() {
        const value = {
            ...this.state
        }
        return (
            <Provider value = {value}>
                {this.props.children}
            </Provider>    
            
        )
    }
}

export const withDataProvider = C => props => (
    <Consumer>
        {containerProps => <C {...containerProps} {...props} />}
    </Consumer>
)