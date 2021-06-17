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
            
            <div class = "bg-navy grid md:grid-cols-12 relative font-sans flex">       
                <h1 class = "text-white md:col-start-3 md:col-end-13 md:pt-14 md:text-6xl">Our Services</h1>
                <p class = "text-white md:pb-44 md:col-start-3 md:col-end-11 md:pt-5 md:text-base font-normal md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit elementum lectus, sit amet viverra arcu maximus ac. Proin a dignissim ligula, et pulvinar justo. Aliquam eu varius turpis. Maecenas tempus libero eu mollis condimentum.</p>
                <OptionBar />
            </div>
        )
    }
}

export const OptionBar = () => {
    return(
        <div class = "flex items-center justify-center absolute md:top-50">
            <div class = "bg-red md:w-70 md:h-80">hahaha</div>                    
                                
        </div>
    )
}


