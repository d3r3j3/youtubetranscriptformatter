import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../src/assets/bwdllg.png'
import emailjs from 'emailjs-com';
const axios = require('axios');


export class NavBar extends Component {
    render() {
        return(
            <div class="w-full bg-white flex justify-center items-center font-sans">
                <div class="w-11/12 flex grid grid-cols-12">
                    <div class = "inline-flex space-x-3 whitespace-nowrap font-medium text-base col-start-0">
                        <img src={logo} alt="bwdl" class="pt-4 w-14 h-14"/>
                        <p class = "py-6">YT Transcript <span class = "text-navy">MSTR</span></p>                        
                    </div>
                    <div class=" py-6 space-x-12 font-medium text-base col-start-9 col-end-12">
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
            
            <div class="w-full bg-navy shadow-2xl flex flex-col justify-center -z-20 items-center">
            <div class = "w-3/4 font-sans flex flex-col">       
                <h1 class = "text-white md:pt-14 md:text-6xl">{this.props.title}</h1>
                <p class = "text-white md:pb-44 md:pt-5 md:text-base font-normal md:leading-loose">{this.props.info}</p>
                
            </div>
            {typeof this.props.tool !== 'undefined' ?
            this.props.tool
            :null
            }
            </div>
        )
    }
}

export const OptionBar = () => {
    return(
        <div class = "w-3/4 flex justify-center items-center absolute top-80 md:top-80">
            <div class="w-full grid grid-row-3 gap-4 lg:grid-cols-3 xl:gap-x-14 lg:gap-y-0 lg:h-full">
                <div class="w-full">
                    <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Formatter</div>
                    <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5"><span class="opacity-60">Retrieve formatted youtube video transcripts from non and auto caption tracks.</span></div>
                    <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                        <Link to="/Formatter" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                    </div>
                    <div class="shadow-2xl absolute w-3/10 left-4 top-4 h-full -z-10 bg-darkgray">
                        &nbsp;
                    </div>
                </div>

                <div class="w-full">
                    <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                    <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5"><span class="opacity-60">Get formatted youtube video transcripts on the fly!</span></div>
                    <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                        <Link to="/Generator" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                    </div>
                    <div class="shadow-2xl absolute w-3/10 left-3/10 ml-4 top-4 h-full -z-10 bg-darkgray">
                        &nbsp;
                    </div>
                </div>

                <div class="w-full">
                    <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Not <br/> Sure?</div>
                    <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5"><span class="opacity-60">Answers to all of your questions about YT Transcript.</span></div>
                    <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                        <Link to="/NotSure" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-darkgreen">Go</Link>
                    </div>
                    <div class="shadow-2xl absolute w-3/10 left-3/5 ml-4 top-4 h-full -z-10 bg-darkgray">
                        &nbsp;
                    </div>
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

    clearAll = () => {
        this.setState({url: "", script:"", timeScript:"", langCode:"en", options:[], timeMinStart:"", timeMinEnd:"", timeSecStart:"", timeSecEnd:""})
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

    getTimeMinStart = (val) => {
        this.setState({timeMinStart: val})
    }

    getTimeSecStart = (val) =>  {
        this.setState({timeSecStart: val})
    }

    getTimeMinEnd = (val) => {
        this.setState({timeMinEnd: val})
    }

    getTimeSecEnd = (val) => {
        this.setState({timeSecEnd: val})
    }

    clearScript = () => {
        this.setState({script: "", timeScript: ""})
    }

    getData = (langCode) => {
 
        axios.get(`https://warm-inlet-51238.herokuapp.com/scrape?v=${this.state.url}&code=${langCode == null ? langCode : this.state.langCode}&timeStart=${this.state.timeMinStart + ":" + this.state.timeSecStart}&timeEnd=${this.state.timeMinEnd + ":" + this.state.timeSecEnd}`).then(res => {
            console.log(res.data.script, res.data.langCodes)
            this.setState({script: res.data.script, options: res.data.langCodes, timeScript: res.data.timeScript})
        }).catch(error => {
            console.log("Transcript Error: ", error)
        })
            
    }

    
    render() {
        return(
            <div class = "w-full h-full flex justify-center items-center bg-gray py-8">
                <div class="w-1/2 flex flex-col">
                    <h1 class = "flex text-navy md:pt-4 md:text-5xl font-sans">Formatter</h1>
                    <div class = "w-full grid md:grid-cols-12 flex md:pt-10">
                        <form class="border-navy border-l-2 border-b-2 border-t-2 w-full bg-white rounded-l md:pl-2 md:col-start-1 md:col-end-10 md:py-1.5">
                            <input placeholder="Enter Youtube url to start" onChange={this.getUrl} value={this.state.url} class = "w-full outline-none bg-white text-lightnavy font-sans text-left"></input>
                        </form>                    
                        <div class = "border-navy border-r-2 border-t-2 border-b-2 rounded-r w-full grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 w-full bg-white  md:col-start-10 md:col-end-13 md:py-1.5">
                            <button class="md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 xl:col-start-5 xl:col-end-6 2xl:col-start-6 2xl:col-end-7 h-6 w-6 focus:outline-none" onClick={this.getData}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg></button>
                            <button class="md:col-start-4 md:col-end-5 lg:col-start-5 lg:col-end-6 xl:col-start-7 xl:col-end-8 2xl:col-start-8 2xl:col-end-9 h-6 w-6 focus:outline-none opacity-80" onClick={this.clearAll}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
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
    const copyToClipBoard = () => {
        const elem = textArea
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
                    <SelectMenu opts={options} passLang={getCode} mainBtnStyle="w-full truncate bg-green hover:bg-darkgreen rounded-l-full px-4 py-1 focus:outline-none" optsBtnStyle="bg-white text-black border-b-2 border-green hover:bg-gray"/>
                    <PopField timeData={timeData} btnStyle="w-full bg-green hover:bg-darkgreen border-l-2 border-r-2 border-white px-4 py-1 focus:outline-none" />
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
        setTimeout(
            this.setState({visible: !this.state.visible, name: event.target.dataset.name, code: event.target.dataset.code})
            , 500)
        this.props.passLang(event.target.dataset.code)

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
                {(this.state.visible && this.state.options.length > 0) ?
                <div class="w-1/5 shadow-2xl flex flex-col max-h-24 overflow-y-auto z-20 border-gray absolute mb-36">
                    <h1 class="rounded-tl-md text-center bg-green border-b-2 border-white">Language</h1>
                    {popup}
                </div>
                :null
                }
            </div> 
              
           
        )
    }
    
}

export class PopField extends Component {

    state = {
        visible: false,
        minStart: "",
        secStart: "",
        minEnd: "",
        secEnd: "",
    }

    getTimeMinStart = event => {
        this.setState({minStart: event.target.value})
        this.props.timeData.minStart(event.target.value)
    }

    getTimeSecStart = event =>  {
        this.setState({secStart: event.target.value})
        this.props.timeData.secStart(event.target.value)
    }

    getTimeMinEnd = event => {
        this.setState({minEnd: event.target.value})
        this.props.timeData.minEnd(event.target.value)
    }

    getTimeSecEnd = event => {
        this.setState({secEnd: event.target.value})
        this.props.timeData.secEnd(event.target.value)
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

                    <form class="w-1/5 shadow-2xl max-h-36 z-20 flex flex-col justify-center bg-white absolute pl-1 mb-24">
                        <div class="divid-x text-center w-full bg-green grid grid-cols-2">
                            <label class="border-r">Start</label>
                            <label class="border-l">End</label>
                        </div>
                        
                        <div class="w-full grid grid-cols-2 text-black bg-white">
                            <div class="grid grid-cols-10 border-r border-green">
                                <input placeholder="00" type="text" min="0" max="99" maxLength="2" inputmode="numeric" value={this.state.minStart} onChange={this.getTimeMinStart} class="col-start-1 col-end-5 text-center focus:outline-none"></input>
                                <h1 class="col-start-5 col-end-6 text-center text-darkgray bg-white">:</h1>
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" value={this.state.secStart} onChange={this.getTimeSecStart} class="col-start-6 col-end-10 text-center focus:outline-none"></input>
                            </div>

                            <div class="border-l border-green grid grid-cols-8">
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" value={this.state.minEnd} onChange={this.getTimeMinEnd} class="col-start-1 col-end-4 text-center focus:outline-none"></input>
                                <h1 class="col-start-4 col-end-5 text-center text-darkgray bg-white">:</h1>
                                <input placeholder="00" type="text" min="0" max="99" maxlength="2" inputmode="numeric" value={this.state.secEnd} onChange={this.getTimeSecEnd} class="col-start-5 col-end-8 text-center focus:outline-none"></input>
                            </div>
                            
                        </div>
                    </form>

                    :null
                }

            </div>
        )
    }
}

export const Donate = () => {
    return(
        <div class = "animate-bounce right-4 top-2/3 fixed">
            <a href="https://www.paypal.com/donate?business=MUWKCB7DD7VU4&no_recurring=0&item_name=Support+us+in+keeping+our+services+up%21&currency_code=USD" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="#ffc824">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 class="text-brightorange tracking-wide font-bold">Donate</h1>
            </a>     
        </div>
    )
}

export class ContactBar extends Component {


    render() {

        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_2xe76ee', 'template_13o76vt', e.target, 'user_BX1qZ60jG2ZkkJfk6omb0')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          }


        return(
            <div class="w-full flex justify-center items-center">
                <form class="pt-24 pb-2 w-full max-w-lg pl-1/2" onSubmit={sendEmail}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="opacity-90 block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                            </label>
                            <input name="fname" class="appearance-none block w-full text-black opacity-80 border rounded py-2.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""></input>
                            
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="opacity-90 block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                            </label>
                            <input name="lname" class="appearance-none block w-full  opacity-80 text-black border border-black rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="opacity-90 block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
                            E-mail
                            </label>
                            <input name="email" class="appearance-none block w-full opacity-80 text-black border border-black rounded py-2.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"></input>
                            
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2 opacity-90" for="grid-password">
                            Message
                            </label>
                            <textarea name="msg" class=" no-resize appearance-none opacity-80 block w-full text-black border border-black rounded py-2.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <input type="submit" value="Send" class="shadow bg-green hover:bg-darkgreen focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export const CopyRight = () => {
    return(
        <div class = "right-4 bottom-2.5 fixed">
            <p class="text-darkgreen opacity-85 text-xs font-sans font-normal tracking-tight">
                &#169; 2021 by RW & DL - All Rights Reserved.
            </p>                
        </div>
    )
}
