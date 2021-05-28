import React, {Component} from 'react';
const puppeteer = require('puppeteer');

export class NavBar extends Component {
    render() {
        return(
            <div>
                <h1>Youtube Transcript Formatter</h1>
            </div>
        )
    }
}


export class Scraper extends Component {

    
    name = "Brain"
    render() {
        return(
            <div>
                {name}
            </div>
        )
    }
}

export default NavBar;