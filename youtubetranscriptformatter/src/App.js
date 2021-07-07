import Home from './pages/Home';
import React from 'react';
import Formatter from './pages/Formatter';
import Generator from './pages/Generator';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}><Home/></Route>
                    <Route path="/formatter" component={Formatter}><Formatter/></Route>
                    <Route path="/generator" component={Generator}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;