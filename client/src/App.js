
import './App.css';
import Login from './components/Login'
import Register from "./components/Register";
import {Component} from "react";
import { Route, Switch} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/signup' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;
