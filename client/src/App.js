import React from 'react'
import Header from './Header'
import Mainview from './Mainview';
import styles from "./styles/styles.css"

function App() {
    return (
        <div className="app-view">
            <Header className="header"/>
            <Mainview className="main-view" />
            
        </div>
    )
}

export default App
