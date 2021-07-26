import React from 'react';
import {NavBar, LinkBar, Donate, CopyRight} from '../layouts'


function Formatter() {
    return(
        <div class="w-full h-full bg-gray grid grid-rows flex justify-center items-center">
            <NavBar/>
            <LinkBar/>
            <CopyRight />
            <Donate />
            <div class="w-full h-full bg-gray fixed -z-10">
                &nbsp;
            </div>
        </div>
    );
}

export default Formatter;