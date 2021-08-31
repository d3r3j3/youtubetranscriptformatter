import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');


export class NavBar extends Component {
    render() {
        return(
            <div class="w-full bg-white flex justify-center items-center font-sans">
                <div class="w-11/12 py-6 flex grid grid-cols-12">
                    <h1 class = "whitespace-nowrap text-normal text-base col-start-0">YT Transcript <span class = "text-navy">MSTR</span></h1>
                    <div class="space-x-12 text-normal text-base col-start-9 col-end-13">
                        <Link to="/" class = "text-red md:hover:underline">Home</Link>                
                        <Link to="/Formatter" class = "text-navy md:hover:underline">Formatter</Link>
                        <Link to="/Generator" class = "text-navy md:hover:underline">Generator</Link>
                        <Link to="/Contact" class = "text-navy md:hover:underline">Contact</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export class IntroBar extends Component {
    render(props) {
        console.log(this.props.tool)
        return(
            
            <div class="w-full bg-navy flex flex-col justify-center items-center">
            <div class = "w-3/4 font-sans flex flex-col">       
                <h1 class = "text-white md:pt-14 md:text-6xl">{this.props.title}</h1>
                <p class = "text-white md:pb-44 md:pt-5 md:text-base font-normal md:leading-loose">{this.props.info}</p>
                
            </div>
            {typeof this.props.tool !== 'undefined' ?
            this.props.tool
            :
            <div>&nbsp;</div>
            }
            </div>
        )
    }
}

export const OptionBar = () => {
    return(
        <div class = "w-3/4 flex justify-center items-center absolute md:top-80">
            <div class="grid md:grid-cols-3 xl:gap-x-14 lg:gap-x-8 md:gap-x-4 gap-y-0 md:h-full">
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Not <br/> Sure?</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/Formatter" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                </div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/Generator" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                </div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/NotSure" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-ss">Go</Link>
                </div>
            </div>                                            
        </div>
    )
}

export class LinkBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"",
            script:"",
            langCode:"en",
            options:[]
        };
    }

    getCode = (code) => {
        this.setState({langCode: code})
    }

    

    getUrl = event => {
        this.setState({url: event.target.value});
    }

    setScript = event => {
        this.setState({script: event.target.value})
        console.log(this.state.script)
    }

    clearScript = () => {
        this.setState({script: ""})
    }

    getData = () => {
        
        axios.get(`/scrape?v=${this.state.url}&code=${this.state.langCode}`).then(res => {
            console.log(res.data.script, res.data.langCodes)
            this.setState({script: res.data.script, options: res.data.langCodes})
        }).catch(error => {
            console.log("HAHAHA", error)
        })
            
    }

    


    render() {
        return(
            <div class = "w-full h-full flex justify-center items-center bg-gray py-8">
                <div class="w-1/2 flex flex-col">
                    <h1 class = "flex text-navy md:pt-4 md:text-5xl font-sans">Formatter</h1>
                    <div class = "w-full grid md:grid-cols-12 flex md:pt-10">
                        <form class="w-full bg-white border-t-2 border-l-2 border-b-2 border-navy rounded-l md:pl-2 md:col-start-1 md:col-end-11 md:py-1.5">
                            <input placeholder="Enter Youtube url to start" class = "w-full outline-none bg-white text-lightnavy font-sans text-left"></input>
                        </form>                    
                        <div class = "grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 w-full bg-white border-t-2 border-r-2 border-b-2 rounded-r border-navy md:col-start-11 md:col-end-13 md:py-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 xl:col-start-5 xl:col-end-6 2xl:col-start-6 2xl:col-end-7 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>  
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:col-start-4 md:col-end-5 lg:col-start-5 lg:col-end-6 xl:col-start-7 xl:col-end-8 2xl:col-start-8 2xl:col-end-9 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="navy"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>           
                    </div>                    
                </div>
                {FormatterBar(this.state.script, this.setScript, this.clearScript)}
            </div>
        )
    }
}

export const FormatterBar = (script, setScript, clearScript) => {
    let textArea;
    const copyToClipBoard = () => {
        const elem = textArea
        elem.select()
        document.execCommand("copy")
    }

    return(
        <div class="w-1/2 md:top-70 grid-cols-12 absolute">
            <div class = "md:col-start-1 md:col-end-12 bg-white md:pl-2 md:pr-2 md:pt-2 border-t-2 border-l-2 border-navy border-r-2 rounded-t-md md:h-80 font-sans text-left">
                <textarea class="bg-white w-full h-full resize-none focus:outline-none" onChange={setScript} value={script} rows="12" placeholder="Can Edit"></textarea>
            </div>            
            <div class = "grid grid-rows-6 grid-cols-11 shadow-xl bg-white shadow-md border-b-2 border-l-2 border-r-2 border-navy rounded-1 md:col-start-7 md:col-end-11 md:h-12 font-sans rounded-b-md">
                <div class = "text-white font-semibold shadow-inner inline-flex grid grid-rows-5 divide-x-2 row-start-1 row-end-6 lg:col-start-2 lg:col-end-11 md:col-start-2 md:col-end-11 bg-green rounded-full">
                    <button class = "row-start-2 row-end-5">Language</button>
                    <button class = "row-start-2 row-end-5">Time</button>
                    <button class = "row-start-2 row-end-5">Punctuate</button>
                    <button class = "row-start-2 row-end-5">Copy</button>
                </div>
            </div>
        </div>       
        
    )
    
}

export class SelectMenu extends Component {

    
    state = {
        visible: false,
        name: 'English',
        code: 'en',
        options: this.props.opts,
    }

    handleVisibility = () => {
        this.setState({visible: !this.state.visible, options: this.props.opts})

    }

    handleLang = event => {
        console.log(event.target.dataset.name, event.target.dataset.code)
        console.log(this.options)
        this.setState({visible: !this.state.visible, name: event.target.dataset.name, code: event.target.dataset.code})
        this.props.passLang(event.target.dataset.code)
    }

    render() {
        
        const popup = this.state.options.map(item => {
            return(
                <button class="text-left bg-navy text-white border-b-2 border-gray py-1 px-2 font-semibold hover:bg-white hover:text-navy" onClick={this.handleLang} data-name={item.name} data-code={item.code}>{item.name}</button>
            )
        })

        return(
            <div class="w-full flex flex-col justify-center items-center">
                <button class="w-full py-1.5 flex justify-center items-center bg-navy rounded-md text-white focus:outline-none font-bold hover:bg-gray hover:text-navy" onClick={this.handleVisibility}>
                    <span>{this.state.name}</span>
                </button>
                {this.state.visible ?
                <div class="w-full shadow-2xl flex flex-col max-h-36 overflow-y-auto z-20 border-t-4 border-gray rounded-b-md">
                    {popup}
                </div>
                :
                <div class="absolute">&nbsp;</div>
                }
            </div> 
              
           
        )
    }
    
}

export class ContactBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:grid-cols-12 flex">
                <p class = "md:col-start-4 md:col-span-4 bg-red h-20"></p>
                          
            </div>
        )
    }
}









