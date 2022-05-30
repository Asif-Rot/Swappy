import './App.css';
import Login from './routes/SignIn'
import Register from "./routes/SignUp";
import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Profile from './routes/Profile'
import Settings from './routes/Settings'
import Message from './routes/Message'
import Trades from './routes/MyTrades'
import Items from './routes/MyItems'
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
                    <PrivateRoute component={Settings} path="/settings" exact/>
                    <PrivateRoute component={Message} path="/message" exact/>
                    <PrivateRoute component={Trades} path="/mytrades" exact/>
                    <PrivateRoute component={Items} path="/myitems" exact/>
                    <Route component={NotFound}/>
                </Switch>
            </Route>
        );
    }
}


export default App;



