import React from 'react';
import {NavBar, IntroBar, Donate} from '../layouts'

const data = {
    title: "Transcript Generator",
    info: "Get youtube video transcripts on the fly with YT Transcript Generator Extension. Coming Soon!",
  
  }

function Generator() {
    return(
        <div class="w-full grid grid-rows flex justify-center items-center">
            <NavBar />
            <IntroBar title={data.title} info={data.info} />
            <Donate />
        </div>
    );
}

export default Generator;