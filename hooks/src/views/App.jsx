import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import { Menu, Content } from '../components/layout'

const App = props => {

    return (
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
    )
}

export default App