import React, {Component} from 'react';



export class NavBar extends Component {
    render() {
        return(
            <div class = "w-full h-4.5 grid grid-rows-3 md:font-sans">
                <h1 class = "pl-8 row-start-2">Youtube Transcript <span class = "text-navy">MSTR</span></h1>
                <a href="#" class = "no-underline md:hover:underline row-start-2 pl-45">Home</a>
                <a href="#" class = "no-underline md:hover:underline row-start-2 pl-2">Formatter</a>
                <a href="#" class = "no-underline md:hover:underline row-start-2 pl-2">Generator</a>
                <a href="#" class = "no-underline md:hover:underline row-start-2 pl-2">Contact</a>
            </div>
        )
    }
}

export class IntroSec extends Component {
    render() {
        return(
            <div class = "bg-navy text-white w-full h-24 flex justify-center pt-12 pb-32">
                <div class = 'w-full text-left font-sans pl-18.5'>
                    <h1 class = "text-5xl font-sans pt-3.5">Our Services</h1>
                    <p class = "text-base font-sans pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at varius leo. Donec porta erat vel cursus dictum. Nunc ultricies.</p>
                </div>
            </div>
            
        )
    }
}

export class Tools extends Component {
    render() {
        
        return(
            <div class = "w-full h-full flex items-center">
                <div class = "w-17.5 h-20 bg-gray left-18.5 top-20 absolute">
                    <div class = "w-17.5 absolute top-3 left-3 h-20 border-4 border-gray"></div>
                    <h1 class = "text-2xl text-navy font-sans absolute pt-8 pl-8 break-all">Transcript Formatter</h1>
                    <p class = "text-base font-thin leading-relaxed font-sans text-navy absolute pl-8 break-all top-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button class = "font-sans text-navy absolute font-bold bottom-5 right-5 float-right w-12 h-12 border-2 border-navy rounded-full flex items-center justify-center">GO</button>
                </div>

                <div class = "w-17.5 h-20 bg-gray right-18.5 top-20 absolute"> 
                    <div class = "w-17.5 absolute top-3 left-3 h-20 border-4 border-gray"></div>
                    <h1 class = "text-2xl text-navy font-sans absolute pt-8 pl-8 break-all">Not Sure?</h1>
                    <p class = "text-base font-thin leading-relaxed font-sans text-navy absolute pl-8 break-all top-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button class = "font-sans text-navy absolute font-bold bottom-5 right-5 float-right w-12 h-12 border-2 border-navy rounded-full flex items-center justify-center">GO</button>
                </div>

                <div class = "w-17.5 h-20 bg-gray left-39.75 top-20 absolute">
                    <div class = "w-17.5 absolute top-3 left-3 h-20 border-4 border-gray"></div> 
                    <h1 class = "text-2xl text-navy font-sans absolute pt-8 pl-8 break-all">Transcript Generator</h1>
                    <p class = "text-base font-thin leading-relaxed font-sans text-navy absolute pl-8 break-all top-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button class = "font-sans text-navy absolute font-bold bottom-5 right-5 float-right w-12 h-12 border-2 border-navy rounded-full flex items-center justify-center">GO</button>
                </div>
                
                

                              
            </div>
            
        )
    }
}
