import React from 'react';
import {NavBar, IntroBar, OptionBar, Donate, CopyRight} from '../layouts.js';

const data = {
  title: "Our Services",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit elementum lectus, sit amet viverra arcu maximus ac. Proin a dignissim ligula, et pulvinar justo. Aliquam eu varius turpis. Maecenas tempus libero eu mollis condimentum.",

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
