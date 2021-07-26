import React from 'react';
import {NavBar, IntroBar, OptionBar, Donate, CopyRight} from '../layouts.js';

const data = {
  title: "Our Services",
  info: "Welcome to YT Transcript MSTR! A youtube transcript formatter that doesn't require downloading files to use the transcript. Just click COPY and you are all ready to use the transcript!",

}

function Home() {

  return (
    <div class="w-full grid grid-rows flex justify-center items-center overflow-y-auto">
      <NavBar/>  
      <IntroBar tool={OptionBar()} title={data.title} info={data.info}/>
      <CopyRight />
      <Donate />
    </div>
  );
}

export default Home;
