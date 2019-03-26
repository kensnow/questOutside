import React, { Component, createContext } from 'react'
import axios from 'axios'
export const {Consumer, Provider} = createContext()
const userAxios = axios.create()

//add axios interceptor
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default class ProfileProvider extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password:"",
            errMsg:"",
            token:localStorage.getItem("token") || "",
            user:JSON.parse(localStorage.getItem("user")) || {}
        }
        this.signIn = this.signIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.signUp = this.signUp.bind(this)
        this.acceptQuest = this.acceptQuest.bind(this)
        this.completeQuest = this.completeQuest.bind(this)
        this.completeTrail = this.completeTrail.bind(this)
     
    }
    // state  user data
    // methods for logging in, signing up, populating state from db, logging out,   updating state & db upon completed quest

    clearInputs = () => {
        this.setState({
            username:"",
            password:"",
            errMsg:""
        })
    }

    signIn(userDat){
        //axios request to login
        console.log(userDat)
        return userAxios.post("/auth/signin",{
            ...userDat
        })
            .then(res => {     
   
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    token,
                    password: "",
                    user
                })
                return res  
                  
            })
    }

    acceptQuest(userId, questId){

        return userAxios.put("/api/profile/quests",{
            user: userId,
            quest: questId,
            action: "accept"

        })
            .then( res => {
                const profile = res.data
                this.setState( {
                    user:profile
                })
                return res
            })
            .catch(err => {
                return err
            })

    }

    completeQuest(userId, questId, subDocId){

        return userAxios.put("/api/profile/quests",{
            user: userId,
            quest: questId,
            action: "complete",
            subDocId: subDocId
    
        })
            .then( res => {
                const profile = res.data
                this.setState( {
                    user:profile
                })
                
                return res
            })
            .catch(err => {
                return err
            })
        
            
    }


    completeTrail(userId, questId, subDocId, trailId){
        return userAxios.put("/api/profile/quests",{
            user: userId,
            quest: questId,
            action: "trailComplete",
            subDocId: subDocId,
            trailId: trailId
        })
        .then(res => {
            const profile = res.data
            
            this.setState( {
                user:profile
            })
            return res
        })
        .catch(err => {
            return err
        })
    }




    signUp(userDat){
        return userAxios.post("/auth/signup",{
            ...userDat
        })
            .then(res => {
                const {user, token} = res.data
                this.setState({
                    token,
                    password: "",
                    user
                })   
                return res
            })
            .catch(err => {
                this.setState({errMsg: err.response.data.message})
                this.props.history.push('/signup')
                return err
            })
      
    }

    logOut(){
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            email: "",
            password:"",
            user:"",
            token:""
        })
        this.props.history.push('/')
    }

    render() {
        const value = {
            signIn: this.signIn,
            signUp: this.signUp,
            logOut: this.logOut,
            acceptQuest: this.acceptQuest,
            completeQuest: this.completeQuest,
            completeTrail:this.completeTrail,
            ...this.state 
        }

        return (
            <Provider value = {value} >
               {this.props.children}
            </Provider>
        )
    }
}

export const withProfileProvider = C => props => (
    <Consumer>
        {containerProps => <C {...containerProps} {...props}/>}
    </Consumer>
)
