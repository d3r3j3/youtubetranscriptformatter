import React from 'react';
import {NavBar, ContactBar, CopyRight, Donate} from '../layouts'


function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <ContactBar />
            <CopyRight />
            <Donate />
            <div class="w-full h-full bg-gray fixed -z-10">
                &nbsp;
            </div>
        </div>
    );
}

export default Generator;