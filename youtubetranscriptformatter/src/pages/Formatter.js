import React from 'react';
import {NavBar2, LinkBar, FormatterBar} from '../layouts.js';


function Formatter() {
    return(
        <div class = "w-screen h-screen grid flex bg-gray">
            <NavBar2/>
            <LinkBar/> 
            <FormatterBar/> 
                     
        </div>
    );
}

export default Formatter;