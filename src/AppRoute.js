import React from 'react'
import Nav from './componentsRoute/Nav'
import Shope from './componentsRoute/Shope'
import About from './componentsRoute/About'
import Home from './componentsRoute/Home'
import ShopeDetail from './componentsRoute/ShopeDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function AppRoute() {
    return (
        <Router>
            <div>
               <Nav/>
               <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/shope' exact component={Shope}/>
                    <Route path='/shope/:id' component={ShopeDetail}/>
               </Switch>
            </div>
        </Router>
       
    )
}

export default AppRoute
