import React from 'react'
import { render } from 'react-dom'
import App from "./App"
import {BrowserRouter} from "react-router-dom" 
import ProfileProvider from './dataProviders/ProfileProvider'
import DataProvider from "./admin/DataProvider"

render(
    <BrowserRouter>
        <DataProvider>
            <ProfileProvider>
                <App/>
            </ProfileProvider>
        </DataProvider>  
    </BrowserRouter>,
    document.getElementById('root'))