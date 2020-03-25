import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import CustomerBasket from './CustomerBasket'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Search from './Search'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Search' component={Search}></Route>
            <Route path='/CustomerBasket' component={CustomerBasket}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Logout' component={Logout}></Route>
            <Route path='/Register' component={Register}></Route>
        </Switch>
    )
}

export default Main
