import React, {Component} from 'react';

export class NavBar extends Component {
    render() {
        return(
            <div className="font-bold text-2xl">
                <h1>Youtube Transcript Formatter</h1>
            </div>
        )
    }
}

export class Formatter extends Component {
    state = {
        script:""
    }

    handleScript = event => {
        this.setState({script: event.target.value})
    }


    presentScript = () => {
        console.log(this.state.script)
        var str = this.state.script
        var strArray = str.split(/\d\d:\d\d/)
        var formattedStr = strArray.join("")
        console.log(formattedStr)
    }

    render() {
        return(
            <div className="grid grid-row flex items-center justify-center my-3">
                <textarea className="focus:outline-none focus:ring-2 focus:ring-green-300 shadow-2xl" rows='10' cols='80' onChange={this.handleScript} placeholder="paste transcript"/>
                <button className="hover:bg-white focus:outline-none font-bold shadow-2xl mt-1 float-left bg-green-300" onClick={this.presentScript}>Format</button>
            </div>
        )
    }
}

export class Parser extends Component {
    render() {
        return(
            <div className="grid grid-cols-3 gap-3 flex items-center justify-center my-3">
                <button className="hover:bg-white focus:outline-none font-bold shadow-2xl mt-1 bg-green-300">Scrape</button>
                <input className="focus:outline-none col-span-2 border-solid border-b-2 border-black" placeholder="url"/>
                
            </div>
        )
    }
}

export const Header = (props) => {
    return(
        <div className="font-bold text-xl text-left mt-3">
            <h1>{props.name}</h1>
        </div>
    )
}

export default {NavBar, Formatter, Parser, Header};