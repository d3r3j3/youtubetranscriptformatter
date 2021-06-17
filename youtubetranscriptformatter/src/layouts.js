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
        <div class = "w-3/4 lg:bottom-64 absolute md:top-80 md:h-80">
            <div class="-z-10 md:h-full md:w-full absolute top-3 left-3 grid md:grid-cols-3 md:gap-4 md:h-full">
                <div class = "bg-darkgray shadow-2xl">&nbsp;</div>
                <div class = "bg-darkgray shadow-2xl">&nbsp;</div>
                <div class = "bg-darkgray shadow-2xl">&nbsp;</div>
            </div>
            <div class="grid md:grid-cols-3 md:gap-4 md:h-full">
                <div class = "bg-gray"></div>
                <div class = "bg-gray"></div>
                <div class = "bg-gray"></div>
            </div>
                                            
        </div>
    )
}


