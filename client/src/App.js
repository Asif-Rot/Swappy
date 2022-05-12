
import './App.css';
import Login from './components/SignIn'
import Register from "./components/SignUp";
import {Component} from "react";
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/signup' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
