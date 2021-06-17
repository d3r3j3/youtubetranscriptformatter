import React from 'react';
import {NavBar, IntroBar} from '../layouts.js';

function Home() {

  return (
    <div class="w-full grid grid-rows flex justify-center items-center">
      <NavBar/>  
      <IntroBar/>      
    </div>
  );
}

export default Home;
