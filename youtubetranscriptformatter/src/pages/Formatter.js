import React from 'react';
import {NavBar, LinkBar, FormatterBar} from '../layouts.js';


function Formatter() {
    return(
        <div class = "w-screen h-screen grid flex bg-gray">
            <NavBar/>
            <LinkBar/> 
            <FormatterBar/> 
                     
        </div>
    );
}

export default Formatter;