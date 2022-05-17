import './App.css';
import Login from './routes/SignIn'
import Register from "./routes/SignUp";
import {Component} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/Home'
import {useState} from 'react'
import react from 'react'
import NotFound from './routes/NotFound'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Profile from './routes/Profile'

/**
 * Open start app
 */

class App extends Component {
    render() {
        return (
            <Route>
                <Switch>
                    <PublicRoute component={Login} restricted={true}  path="/" exact />
                    <PublicRoute component={Login} restricted={true}  path="/login" exact />
                    <PrivateRoute component={Home} path="/home" exact />
                    <PrivateRoute component={Profile} path="/profile" exact/>
                    <PublicRoute restricted={true} component={Register} path="/signup" exact />
                    <Route component={NotFound}/>
                </Switch>
            </Route>
        );
    }
}


export default App;



