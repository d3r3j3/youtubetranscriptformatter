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

export const FormattedScript = (props) => {
    console.log(props.script)
    var str = props.script
    var strArray = []
    if(props.script.length > 0) {
        strArray = str.split(/\d\d:\d\d\s\s/)
    }
    
    var formattedStr = strArray.join(" ")
    console.log(formattedStr)

    return(
        <div>
            <Header name="Formatted Script"/>
            
            <p className="w-100 bg-white border-t-2 border-solid border-green-300 shadow-2xl focus:outline-none focus:ring-1 focus:ring-green-300 text-left">{formattedStr}</p>
            
        </div>
    )
}

export class Formatter extends Component {
    state = {
        script:"",
    }

    handleScript = event => {
        this.setState({script: event.target.value})
    }

    

    render(props) {
        return(
            <div className="grid grid-row flex items-center justify-center my-3">
                <form>
                <textarea className="w-100 border-t-2 border-solid border-green-300 focus:outline-none focus:ring-1 focus:ring-green-300 shadow-2xl" rows='10' onChange={this.handleScript} placeholder="paste transcript"/>
                <br/>
                </form>
                {this.state.script.length > 0 && <FormattedScript script={this.state.script}/>}
                
            </div>
        )
    }
}

export class Parser extends Component {
    render() {
        return(
            <div className="bg-white border-t-2 border-solid border-green-300 shadow-2xl p-2 grid grid-cols-3 gap-3 flex items-center justify-center my-3">
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

export default {NavBar, Formatter, Parser, FormattedScript, Header};