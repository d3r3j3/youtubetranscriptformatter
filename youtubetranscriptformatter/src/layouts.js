import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:py-6 md:grid-cols-12 font-sans flex">       
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
            
            <div class="w-full bg-navy flex flex-col justify-center items-center">
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
                <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Transcript <br/> Generator</div>
                <div class = "shadow-2xl bg-gray md:text-normal md:text-2xl md:text-navy font-sans text-left break-all lg:pl-10 lg:pt-8 md:pb-3 md:pl-5 md:pt-4">Not <br/> Sure?</div>
                <div class = "box-content md:h-56 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-56 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class = "box-content md:h-56 bg-gray md:text-normal md:text-base md:text-black font-sans text-left lg:pl-10 lg:pr-10 md:pl-5 md:pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div> 
                                                       
        
                                            
        </div>
    )
}

export class NavBar2 extends Component {
    render() {
        return(
            <div class = "w-full grid md:py-6 md:grid-cols-12 font-sans flex bg-white">       
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

export class LinkBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:grid-cols-12 flex md:pt-20">       
                <div class = "bg-white shadow-md text-lightnavy md:pl-2 border-2 border-navy rounded md:col-start-3 md:col-end-11 md:py-1.5 font-sans text-left">Enter a YouTube link to start:</div>                
            </div>
        )
    }
}

export class FormatterBar extends Component {
    render() {
        return(
            <div class = "w-full grid md:grid-cols-12 flex md:pt-10 md:grid-rows-6">       
                <div class = "text-lightnavy bg-white shadow-md md:pl-2 md:pr-2 md:pt-2 border-t-2 border-l-2 border-b-2 border-r border-navy rounded-l md:col-start-3 md:col-end-7 md:h-88 font-sans text-left">This box displays the original YouTube transcript and lets you make changes to it.</div>                    
                <div class = "text-lightnavy bg-white shadow-md md:pl-2 md:pr-2 md:pt-2 border-t-2 border-b-2 border-r-2 border-l border-navy rounded-r md:col-start-7 md:col-end-11 md:h-88 font-sans text-left">This box displays the formatted YouTube transcript.</div>  
                
            </div>
        )
    }
}

