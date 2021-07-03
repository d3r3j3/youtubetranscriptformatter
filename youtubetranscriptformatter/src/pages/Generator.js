import React from 'react';
import {NavBar, IntroBar} from '../layouts'


function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <IntroBar />
        </div>
    );
}

export default Generator;