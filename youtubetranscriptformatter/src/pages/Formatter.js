import React from 'react';
import {NavBar, LinkBar} from '../layouts'


function Formatter() {
    return(
        <div class="w-full bg-gray grid grid-rows flex justify-center items-center">
            <NavBar/>
            <LinkBar/>
        </div>
    );
}

export default Formatter;