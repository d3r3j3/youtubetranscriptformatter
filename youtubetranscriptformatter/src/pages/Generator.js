import React from 'react';
import {NavBar, IntroBar, Donate, CopyRight} from '../layouts'

const data = {
    title: "Transcript Generator",
    info: "Get youtube video transcripts on the fly with YT Transcript Generator Extension. Coming Soon!",
  
  }

function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <IntroBar title={data.title} info={data.info} />
<<<<<<< HEAD
            
            
=======
            <CopyRight />
            <Donate />
>>>>>>> 22a698c96b62e3980f7b7e79d4f66ab4106389eb
        </div>
    );
}

export default Generator;