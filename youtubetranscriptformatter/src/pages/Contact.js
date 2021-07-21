import React from 'react';
import {NavBar, IntroBar} from '../layouts'

const data = {
    title: "Contact",
    info: "japple@seed.com",
  
  }

function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <IntroBar title={data.title} info={data.info} />
        </div>
    );
}

export default Generator;