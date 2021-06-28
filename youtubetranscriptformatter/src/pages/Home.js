import React from 'react';
import {NavBar, IntroBar} from '../layouts.js';

function Home() {
  return (
    <div class="w-screen grid grid-rows flex">
      <NavBar/>  
      <IntroBar/>          
    </div>
  );
}

export default Home;
