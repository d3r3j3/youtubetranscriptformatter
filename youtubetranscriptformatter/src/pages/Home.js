import React from 'react';
import {NavBar, IntroSec, Tools} from '../layouts.js';

function Home() {

  return (
    <div class="w-full max-h-full grid grid-rows-10 flex">
      <NavBar/>
      <IntroSec/>      
      <Tools/>
    </div>
  );
}

export default Home;
