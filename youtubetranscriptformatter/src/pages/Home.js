import React from 'react';
import {NavBar, IntroBar, OptionBar} from '../layouts.js';

function Home() {

  return (
    <div class="w-full grid grid-rows flex justify-center items-center overflow-y-auto">
      <NavBar/>  
      <IntroBar />
      <OptionBar />
      
      
    </div>
  );
}

export default Home;