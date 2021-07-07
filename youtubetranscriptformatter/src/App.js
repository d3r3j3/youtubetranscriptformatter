import Home from './pages/Home';
import React from 'react';
import Formatter from './pages/Formatter';
import Generator from './pages/Generator';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return(
        <div class="w-full p-0 m-0">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/formatter" component={Formatter}></Route>
                    <Route path="/generator" component={Generator}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;