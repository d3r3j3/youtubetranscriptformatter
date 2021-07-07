import Home from './pages/Home';
import React from 'react';
import Formatter from './pages/Formatter';
import Generator from './pages/Generator';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}><Home/></Route>
                    <Route path="/formatter" component={Formatter}><Formatter/></Route>
                    <Route path="/generator" component={Generator}/>
                    <Route path="/contact" component={Contact}/><Contact/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;