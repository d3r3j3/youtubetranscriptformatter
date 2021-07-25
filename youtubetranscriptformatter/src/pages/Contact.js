import React from 'react';
import {NavBar, ContactBar, Donate} from '../layouts'


function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <div class="w-full bg-navy flex justify-center items-center text-white md:text-6xl md:pb-8 font-bold">
                <h1 class="w-3/5 bg-navy">Contact</h1>
            </div>
            <ContactBar />
            <Donate />
        </div>
    );
}

export default Generator;