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
            
            <div class="w-full bg-navy shadow-2xl flex flex-col justify-center items-center">
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
                    <Link to="/NotSure" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                </div>
            </div>                                            
        </div>
    )
}

export class LinkBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"https://www.youtube.com/watch?v=lwOsI8LtVEQ",
            timeMinStart: "",
            timeSecStart: "",
            timeMinEnd: "",
            timeSecEnd: "",
            script:"",
            timeScript:"",
            langCode:"en",
            options:[]
        };
    }

    getCode = (code) => {
        this.setState({langCode: code})
    }

    clearUrl = () => {
        this.setState({url: ""})
    }

    getUrl = event => {
        this.setState({url: event.target.value});
    }

    setScript = event => {
        this.setState({script: event.target.value})
    }

    setTimeScript = event => {
        this.setState({timeScript: event.target.value})
    }

    getTimeMinStart = event => {
        this.setState({timeMinStart: event.target.value})
    }

    getTimeSecStart = event =>  {
        this.setState({timeSecStart: event.target.value})
    }

    getTimeMinEnd = event => {
        this.setState({timeMinEnd: event.target.value})
    }

    getTimeSecEnd = event => {
        this.setState({timeSecEnd: event.target.value})
    }

    clearScript = () => {
        this.setState({script: "", timeScript: ""})
    }

    getData = () => {
        axios.get(`/scrape?v=${this.state.url}&code=${this.state.langCode}&timeStart=${this.state.timeMinStart + ":" + this.state.timeSecStart}&timeEnd=${this.state.timeMinEnd + ":" + this.state.timeSecEnd}`).then(res => {
            console.log(res.data.script, res.data.langCodes)
            this.setState({script: res.data.script, options: res.data.langCodes, timeScript: res.data.timeScript})
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
                        <form class="w-full bg-white  rounded-l md:pl-2 md:col-start-1 md:col-end-10 md:py-1.5">
                            <input placeholder="Enter Youtube url to start" onChange={this.getUrl} value={this.state.url} class = "w-full outline-none bg-white text-lightnavy font-sans text-left"></input>
                        </form>                    
                        <div class = "w-full grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 w-full bg-white  md:col-start-10 md:col-end-13 md:py-1.5">
                            <button class="md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 xl:col-start-5 xl:col-end-6 2xl:col-start-6 2xl:col-end-7 h-6 w-6 focus:outline-none focus:bg-navy" onClick={this.getData}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg></button>
                            <button class="md:col-start-4 md:col-end-5 lg:col-start-5 lg:col-end-6 xl:col-start-7 xl:col-end-8 2xl:col-start-8 2xl:col-end-9 h-6 w-6 focus:outline-none focus:bg-green" onClick={this.clearUrl}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="navy"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    </div>                    
                </div>
                {FormatterBar({script: this.state.script, timeScript: this.state.timeScript}, this.state.options, this.getCode, this.setScript, {minStart: this.getTimeMinStart, secStart: this.getTimeSecStart, minEnd: this.getTimeMinEnd, secEnd: this.getTimeSecEnd})}
            </div>
        )
    }
}

export const FormatterBar = (script, options, getCode, setScript, timeData) => {
    let textArea;
    let timeArea;
    const copyToClipBoard = () => {
        const elem = textArea
        elem.select()
        document.execCommand("copy")
    }

    const copyTScriptToBoard = () => {
        const elem = timeArea
        elem.select()
        document.execCommand("copy")
    }

    return(
       
        <div class="w-1/2 md:top-70 grid-cols-12 absolute">
            <div class = "md:col-start-1 md:col-end-12 bg-white md:pl-2 md:pr-2 md:pt-2 border-t-2 border-l-2 border-navy border-r-2 rounded-t-md md:h-80 font-sans text-left">
                <textarea class="bg-white w-full h-full resize-none focus:outline-none pl-2" ref={(textarea) => textArea = textarea} onChange={setScript} value={script.script} rows="12" placeholder="Can Edit"></textarea>
            </div>           
            <div class = "w-full bg-white border-b-2 border-l-2 border-r-2 border-navy rounded-1 md:col-start-7 md:col-end-11 md:h-12 font-sans rounded-b-md flex justify-center items-center">
                <div class="w-3/5 grid grid-cols-3 bg-opacity-0 text-white font-semibold inline-flex rounded-full justify-center items-center">
                    <SelectMenu opts={options} passLang={getCode} mainBtnStyle="w-full bg-green hover:bg-darkgreen rounded-l-full px-4 py-1 focus:outline-none" optsBtnStyle="bg-green border-b-2 border-white hover:bg-white hover:text-navy"/>
                    <PopField minStart={timeData.minStart} secStart={timeData.secStart} minEnd={timeData.minEnd} secEnd={timeData.secEnd} btnStyle="w-full bg-green hover:bg-darkgreen border-l-2 border-r-2 border-white px-4 py-1 focus:outline-none" />
                    <button class="bg-green hover:bg-darkgreen rounded-r-full px-4 py-1 focus:outline-none" onClick={copyToClipBoard}>Copy</button>
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
        this.props.passLang(this.state.code)
    }

    render() {
        
        const popup = this.state.options.map(item => {
            return(
                <button class={this.props.optsBtnStyle} onClick={this.handleLang} data-name={item.name} data-code={item.code}>{item.name}</button>
            )
        })

        return(
            <div class="w-full flex flex-col justify-center items-center">
                <button class={this.props.mainBtnStyle} onClick={this.handleVisibility}>
                    <span>{this.state.name}</span>
                </button>
                {this.state.visible ?
                <div class="w-1/5 shadow-2xl flex flex-col max-h-36 overflow-y-auto z-20 border-gray rounded-b-md absolute mt-48">
                    {popup}
                </div>
                :
                <div class="absolute z-20">&nbsp;</div>
                }
            </div> 
              
           
        )
    }
    
}

export class PopField extends Component {

    state = {
        visible: false,
    }

    handleVisibility = () => {
        this.setState({visible: !this.state.visible})
    }
    
    render() {
        return(
            <div class="w-full flex flex-col justify-center items-center">

                <button class={this.props.btnStyle} onClick={this.handleVisibility}>
                    <span>Time</span>
                </button>

                {
                    this.state.visible ?

                    <form class="w-1/5 shadow-2xl max-h-36 z-20 flex flex-col justify-center bg-green absolute mt-24">
                        <div class="w-full grid grid-cols-2">
                            <label class="">Start</label>
                            <label class="">End</label>
                        </div>
                        
                        <div class="w-full grid grid-cols-2 text-black bg-white">
                            <div class="grid grid-cols-10 border-r-2 border-green">
                                <input placeholder="00" type="text" min="0" max="99" maxLength="2" inputmode="numeric" onChange={this.props.minStart} class="col-start-1 col-end-5 text-center focus:outline-none"></input>
                                <h1 class="col-start-5 col-end-6 text-center text-black bg-white">:</h1>
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" onChange={this.props.secStart} class="col-start-6 col-end-10 text-center focus:outline-none"></input>
                            </div>

                            <div class="grid grid-cols-8">
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" onChange={this.props.minEnd} class="col-start-1 col-end-4 text-center focus:outline-none"></input>
                                <h1 class="col-start-4 col-end-5 text-center text-black bg-white">:</h1>
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" onChange={this.props.secEnd} class="col-start-5 col-end-8 text-center focus:outline-none"></input>
                            </div>
                            
                        </div>
                    </form>

                    :
                    <div class="absolute z-20">&nbsp;</div>

                }

            </div>
        )
    }
}

export const Donate = () => {
    return(
        <div class = "right-4 top-2/3 fixed">
            <button class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 hover:opacity-50" fill="none" viewBox="0 0 24 24" stroke="orange">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>     
        </div>
    )
}

export class ContactBar extends Component {

    state = {
        fName:"",
        lName:"",
        email:"",
        msg:"",
    }

    getFName = event => {
        this.setState({fName: event.target.value})
    }

    getLName = event => {
        this.setState({lName: event.target.value})
    }

    getEmail = event => {
        this.setState({email: event.target.value})
    }

    getMsg = event => {
        this.setState({msg: event.target.value})
    }


    render() {
        return(
            <div class="w-full flex justify-center items-center">
                <form class="pt-10 pb-2 w-full max-w-lg pl-1/2">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                            </label>
                            <input onChange={this.getFName} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                            </label>
                            <input onChange={this.getLName} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                            </label>
                            <input onChange={this.getEmail} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"></input>
                            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                            </label>
                            <textarea onChange={this.getMsg} value={this.state.msg} class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                            Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        )
    }
}





/*
<div class = "text-white font-semibold inline-flex grid grid-rows-5 divide-x-2 row-start-1 row-end-6 lg:col-start-2 lg:col-end-11 md:col-start-2 md:col-end-11 bg-green rounded-full">
                    <button class = "row-start-2 row-end-5 hover:bg-navy">Language</button>
                    <button class = "row-start-2 row-end-5">Time</button>
                    <button class = "row-start-2 row-end-5">Punctuate</button>
                    <button class = "row-start-2 row-end-5">Copy</button>
                </div>
*/







