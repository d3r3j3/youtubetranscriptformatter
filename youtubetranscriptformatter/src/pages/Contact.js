import React from 'react';
<<<<<<< HEAD
import {NavBar, ContactBar} from '../layouts'
=======
import {NavBar, ContactBar, CopyRight, Donate} from '../layouts'
>>>>>>> 22a698c96b62e3980f7b7e79d4f66ab4106389eb


function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <ContactBar />
<<<<<<< HEAD
            
=======
            <CopyRight />
            <Donate />
>>>>>>> 22a698c96b62e3980f7b7e79d4f66ab4106389eb
            <div class="w-full h-full bg-gray fixed -z-10">
                &nbsp;
            </div>
        </div>
    );
}

export default Generator;