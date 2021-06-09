import {NavBar, IntroSec, Tools, OptionBar, Formatter, Parser, Header} from '../layouts';

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
