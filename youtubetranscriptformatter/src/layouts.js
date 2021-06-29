import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return(
            <div class = "grid md:py-6 md:grid-cols-12 font-sans flex">       
                <h1 class = "md:text-normal md:text-base md:col-start-1 lg:col-end-3 md:col-end-4 text-center">YT Transcript <span class = "text-navy">MSTR</span></h1>
                <div class = "md:space-x-12 md:text-normal md:text-base md:col-start-5 md:col-end-12 text-right">
                    <Link to="/" class = "text-red md:hover:underline">Home</Link>                
                    <Link to="/Formatter" class = "text-navy md:hover:underline">Formatter</Link>
                    <Link to="/Generator" class = "text-navy md:hover:underline">Generator</Link>
                    <Link to="/Contact" class = "text-navy md:hover:underline">Contact</Link>
                </div>
            </div>
        )
    }
}

export class IntroBar extends Component {
    render() {
        return(
            
            <div class="w-full bg-navy shadow-2xl flex flex-col justify-center items-center">
            <div class = "w-3/4 font-sans flex flex-col">       
                <h1 class = "text-white md:pt-14 md:text-6xl">Our Services</h1>
                <p class = "text-white md:pb-44 md:pt-5 md:text-base font-normal md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit elementum lectus, sit amet viverra arcu maximus ac. Proin a dignissim ligula, et pulvinar justo. Aliquam eu varius turpis. Maecenas tempus libero eu mollis condimentum.</p>
                
            </div>
            <OptionBar />
            </div>
        )
    }
}

export const OptionBar = () => {
    return(
        <div class = "w-3/4 fixed md:top-80">
            <div class="grid md:grid-cols-3 xl:gap-x-14 lg:gap-x-8 md:gap-x-4 gap-y-0 md:h-full">
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Not <br/> Sure?</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-40 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/Formatter" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-navy">Go</Link>
                </div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/Generator" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-navy">Go</Link>
                </div>
                <div class = "md:h-16 bg-gray grid md:grid-cols-7 md:grid-rows-3 text-center">
                    <Link to="/NotSure" class = "shadow-inner pt-2.5 bg-green text-white font-semibold md:row-start-1 md:row-span-2 md:col-start-5 md:col-span-2 rounded-full hover:bg-navy">Go</Link>
                </div>
            </div>                                            
        </div>
    )
}

export class LinkBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:grid-cols-12 flex md:pt-20">
                <form class="w-full border-2 border-navy rounded shadow-md md:pl-2 md:col-start-3 md:col-end-11 md:py-1.5">
                    <input placeholder="Enter Youtube link to start" class = "w-full outline-none bg-white text-lightnavy font-sans text-left"></input>
                </form>           
            </div>
        )
    }
}

export class FormatterBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:grid-cols-12 flex md:pt-10 md:grid-rows-6">       
                <div class = "text-lightnavy bg-white md:pl-2 md:pr-2 md:pt-2 border-t-2 border-l-2 border-r border-navy rounded-tl md:col-start-3 md:col-end-7 md:h-80 font-sans text-left"><textarea class="w-full resize-none focus:outline-none" rows="12" placeholder="Can Edit"></textarea></div>               
                <div class = "text-lightnavy bg-white md:pl-2 md:pr-2 md:pt-2 border-t-2 border-l border-r-2 border-navy rounded-tr md:col-start-7 md:col-end-11 md:h-80 font-sans text-left">This box displays the formatted YouTube transcript.</div>  
                <div class = "grid grid-rows-6 grid-cols-11 shadow-xl bg-white shadow-md border-b-2 border-l-2 border-r border-navy rounded-1 md:col-start-3 md:col-end-7 md:h-12 font-sans rounded-bl">
                    <div class = "shadow-inner grid grid-rows-5 text-center row-start-1 row-end-6 lg:col-start-4 lg:col-end-9 md:col-start-3 md:col-end-10 bg-green rounded-full">
                        <button class = "text-white font-semibold row-start-2 row-end-5 rounded-full">Select Language</button>
                    </div>
                </div>
                <div class = "grid grid-rows-6 grid-cols-11 shadow-xl bg-white shadow-md border-b-2 border-l border-r-2 border-navy rounded-1 md:col-start-7 md:col-end-11 md:h-12 font-sans rounded-br">
                    <div class = "shadow-inner inline-flex grid grid-rows-5 divide-x-2 row-start-1 row-end-6 lg:col-start-4 lg:col-end-9 md:col-start-3 md:col-end-10 bg-green rounded-full">
                        <button class = "text-white font-semibold row-start-2 row-end-5 rounded-full">Punctuate</button>
                        <button class = "text-white font-semibold row-start-2 row-end-5">Copy</button>
                    </div>
                </div>
            </div>
        )
    }
}





